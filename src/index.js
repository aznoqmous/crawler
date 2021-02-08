import Crawler from './crawler'
import Rigged from 'rigged'
import "../scss/main.scss"

document.addEventListener('DOMContentLoaded', ()=>{

  let currentUrl = new URL(window.location.href)
  let searchUrl = (new URLSearchParams(currentUrl.search)).get('url')

  let element = new Rigged({ template: `
    div
      input @input [autofocus="true"]
      div @status
      div @pageCount
      div @pageStatuses
      div @details
      div @results
        div .internal.links
          div
            strong (internal)
            strong @internalCount
          div @internal
        div .external.links
          div
            strong (external)
            strong @externalCount
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
            div .link
              i @status .badge
              i @count .count.badge (1)
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
        element.internalCount.innerHTML = element.internal.children.length
        element.externalCount.innerHTML = element.external.children.length
      },
      onCrawl: (l)=>{
        if(l) {
           els[l.url].status.innerHTML = l.status
           if(l.status == 200) els[l.url].status.classList.add('success')
           else els[l.url].status.classList.add('error')
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
      sortLinks(element.internal)
      sortLinks(element.external)
    })
  }

  function sortLinks(container){
    let links = [...container.children]
    links.map(l => {
      let count = parseInt(l.querySelector('.count').innerHTML)
      return {l, count}
    })
    .sort((a, b)=> (a.count < b.count) ? 1 : -1 )
    .map(l => {
      container.appendChild(l.l)
    })
  }

})
