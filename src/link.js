export default class Link {

  constructor(url, host){
    this.init(url, host)

    this.pagesIn = []
    this.status = null
  }

  init(url, host){
    url = url.replace(/#.*?$/, '') // rm anchor
    url = url.replace(/\?.*?$/, '') // rm params

    /*if(url.match(/^[^\/]*?\./)) {
      let filesExt = '.html|.php'
      if(!url.match(`/[${filesExt}]/`)) {
        if(!url.match(/^http/)) url = `http://${url}`
      }
    }*/

    url = decodeURIComponent(JSON.parse('"' + url + '"'))

    //if(!url.match(/^http/)) url = (url.length && url != '/') ? `http://${host}/${url}` : `http://${host}`
    this.urlItem = new URL(url, host)
    this.url = this.urlItem.href
    this.host = this.urlItem.origin
    this.isExternal = (this.host != host)
  }

  addPageRef(page){
    if(!this.pagesIn.includes(page)) this.pagesIn.push(page)
  }

}
