export default class Link {
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
