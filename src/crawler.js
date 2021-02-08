export default class Crawler {

  constructor(url, opts={}){
    this.opts = Object.assign({
      url: url,
      getPageUrl: '/services/get.php',
      depth: null // infinite
    }, opts)

    this.links = {}
    this.internalCount = 0
    this.externalCount = 0
  }

  startCrawl(url=null){
    url = url ? url : this.opts.url
    if(!url.match('http')) url = `http://${url}`
    this.host = (new URL(url)).host
    return this.crawl(url)
  }

  crawl(url){
    return this.get(url)
    .then(res => {
      let link = this.getLink(url)
      if(link) link.status = res.http_code
      if(this.opts.onCrawl) this.opts.onCrawl(link)
      return Promise.allSettled(
        this.getLinks(res.content)
        .map(l => {
          l = this.addLink(l, url)
          if(l.new && l.link.isExternal) this.externalCount++
          if(l.new && !l.link.isExternal) this.internalCount++
          if(this.opts.onLink) this.opts.onLink(l)
          if(l.new && this.opts.onNewLink) this.opts.onNewLink(l.link)
          return (l.new && !l.link.isExternal) ? l.link : false
        })
        .filter(l => l)
        .map(l => this.crawl(l.url) )
      )

    })
  }

  get(url){

    if(!url) return console.error('You must provide at least an url argument to Crawler !')
    return new Promise((ok, nok) => {
      fetch(this.opts.getPageUrl, {
        method: 'POST',
        body: this.getPostData({url: url})
      })
      .then(res => res.json())
      .then(data => {
        if(data.content) return ok(data)
        return nok(data)
      })
    })

  }

  getPostData(data){

    let datas = new FormData()
    for(let key in data) datas.append(key, data[key])
    return datas

  }

  getLinks(content){
    let links = [...content.matchAll(/\<a[^\>]*?href\=[\"|\']([^\"\']*?)[\"|\']/g)]
    links = links.map(l => l[1])
    links = links.filter(l => l.length)

    let ban = ['mailto:', 'javascript:', 'tel:', '\.jpg', '.png', '.svg']
    ban.map(b => {
        links = links.filter(l => !l.match(b) ? true : false)
    })
    return links
  }

  getLink(url){
    return this.links[url]
  }

  addLink(url, fromPage){
      let l = new Link(url, this.host)

      let isNew = true
      if(!this.links[l.url]) this.links[l.url] = l
      else {
        l = this.links[l.url]
        isNew = false
      }
      l.addPageRef(fromPage)
      return {new: isNew, link: l}
  }

}

class Link {
  constructor(url, host){
    this.pagesIn = []
    url = decodeURIComponent(JSON.parse('"' + url + '"'))
    if(!url.match('http')) url = (url.length && url != '/') ? `http://${host}/${url}` : `http://${host}`
    this.url = url
    this.host = (new URL(this.url)).host
    this.isExternal = (this.host != host)
    this.status = null
  }

  addPageRef(page){
    if(!this.pagesIn.includes(page)) this.pagesIn.push(page)
  }

}
