import Crawler from './crawler'
import Rigged from 'rigged'
document.addEventListener('DOMContentLoaded', ()=>{

  let currentUrl = new URL(window.location.href)
  let searchUrl = (new URLSearchParams(currentUrl.search)).get('url')

  let element = new Rigged({ template: `
    div
      input @input [autofocus="true"]
      div @status
      div @pageCount
      div @details
      div @results
        div .internal.links
          strong (internal)
          div @internal
        div .external.links
          strong (external)
          div @external
    `, container: document.body })

  if(searchUrl) element.input.value = searchUrl

  element.results.setStyle({
    display: "flex"
  })
  element.internal.setStyle({
    display: "flex",
    flexDirection: "column"
  })
  element.external.setStyle({
    display: "flex",
    flexDirection: "column"
  })

  if(element.input.value) crawl()

  element.input.addEventListener('keyup', (e)=>{
    if(e.key == 'Enter') {
      crawl()
    }
  })

  function crawl(){
    let els = {}

    let c = new Crawler(element.input.value, {
      onLink: (l)=>{
        element.pageCount.innerHTML = `${c.internalCount} internal pages crawled`
        if(l.new){
          l = l.link
          let container = element.internal
          if(l.isExternal) container = element.external
          let el = new Rigged({template: `
            div
              span @count (1)
              span ( - )
              span @link (${l.url})
            ` , container})
          els[l.url] = el
          el.link.addEventListener('click', ()=>{
            element.details.clear()
            let lEl = new Rigged({template: `
              div (${l.url})
              ul (${l.pagesIn.map(url => `<a href="${url}" target="_blank">${url}</a>`).join('<br> ')})
              `, container: element.details})
              lEl.element.setStyle({display: 'flex', flexDirection: 'column'})
            })
        }

        else {
          l = l.link
          els[l.url].count.innerHTML = l.pagesIn.length
        }
      }
    })

    element.host = c.host
    element.internal.clear()
    element.external.clear()

    element.status.innerHTML = 'Crawl in progress...'
    element.pageCount.innerHTML = '0 internal page crawled'
    let start = Date.now()
    c.startCrawl(element.input.value)
    .then(res => {
      element.status.innerHTML = `Crawl ended in ${ (Date.now() - start ) / 1000}s`
    })
  }

})
