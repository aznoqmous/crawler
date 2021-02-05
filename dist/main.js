/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/rigged/src/parser.js":
/*!*******************************************!*\
  !*** ./node_modules/rigged/src/parser.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Parser)\n/* harmony export */ });\nclass Parser{\r\n\r\n  static parse(template) {\r\n      let parsed = template.trim().split('\\n')\r\n      let tree = []\r\n      let lastIndent = 0\r\n      let lastEl = null\r\n\r\n      if (!parsed.length) return null\r\n\r\n      parsed = parsed.map((str, i) => {\r\n\r\n          let tag = str.trim().match(/^[^ ]*/)[0]\r\n\r\n          let el = document.createElement(tag)\r\n\r\n          let id = Parser.parseId(str)\r\n          if (id) el.id = id\r\n\r\n          let connector = Parser.parseConnector(str)\r\n          if(connector) el._connector = connector\r\n\r\n          let classes = Parser.parseClasses(str)\r\n          if (classes) classes.map(cls => el.classList.add(cls))\r\n\r\n          let attributes = Parser.parseAttributes(str)\r\n          if(attributes) attributes.map(attr => {\r\n            el.setAttribute(attr.key, attr.value)\r\n          })\r\n\r\n          let content = Parser.parseContent(str)\r\n          if(content) el.innerHTML = content\r\n\r\n          let indent = str.match(/^\\ */)[0].length\r\n\r\n\r\n          if (!tree.length) {\r\n              tree.push(el)\r\n          } else {\r\n\r\n              // remove one from tree then append inside parent\r\n              if (indent < lastIndent) {\r\n                  tree.splice(tree.length-1, 1)\r\n                  tree[tree.length - 1].appendChild(el)\r\n              }\r\n              else if(indent > lastIndent) {\r\n                  if(!tree.includes(lastEl)) tree.push(lastEl)\r\n                  lastEl.appendChild(el)\r\n              }\r\n              else {\r\n                  tree[tree.length - 1].appendChild(el)\r\n              }\r\n          }\r\n\r\n          lastIndent = indent\r\n          lastEl = el\r\n          return el\r\n      })\r\n\r\n      return parsed\r\n  }\r\n\r\n  static removeAttributes(str){\r\n    return str.replace(/\\[[^\\[\\]]*?\\]/gs, '')\r\n  }\r\n\r\n  static removeContent(str){\r\n    return str.replace(/\\([^\\(\\)]*?\\)/gs, '')\r\n  }\r\n\r\n  static parseClasses(str) {\r\n      str = Parser.removeAttributes(str)\r\n      str = Parser.removeContent(str)\r\n\r\n      str = str.match(/\\.[^\\.\\ ]*/gms)\r\n\r\n      if(!str) return null\r\n      return str.map(cls => cls.replace(/\\./, ''))\r\n  }\r\n\r\n  static parseId(str) {\r\n      str = Parser.removeContent(str)\r\n      str = str.match(/\\#[^\\#\\. ]*/)\r\n      if(str) return str[0].replace(/#/, '')\r\n      return null\r\n  }\r\n\r\n  static parseConnector(str){\r\n    str = Parser.removeContent(str)\r\n    let connector = str.match(/\\@[^\\@\\. ]*/)\r\n    if(connector) return connector[0].replace(/@/, '')\r\n    return null\r\n  }\r\n\r\n  static parseAttributes(str) {\r\n      str = Parser.removeContent(str)\r\n      str = str.match(/\\[[^\\]]*\\]/gm)\r\n      if(!str) return null\r\n      return str.map(attr => {\r\n        let key = attr.replace('[', '').replace(/\\=.*?$/, '')\r\n        let value = attr.match(/\\\".*?\\\"/)[0].replaceAll('\"', '')\r\n        return {key, value}\r\n      })\r\n  }\r\n\r\n  static parseContent(str){\r\n      str = str.match(/\\([^\\)]*\\)/)\r\n      if(!str) return \"\"\r\n      str = str[0].replace(/[\\(|\\)]/gs, '')\r\n      return str\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/rigged/src/parser.js?");

/***/ }),

/***/ "./node_modules/rigged/src/rigged.js":
/*!*******************************************!*\
  !*** ./node_modules/rigged/src/rigged.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rigged)\n/* harmony export */ });\n/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ \"./node_modules/rigged/src/parser.js\");\n\r\nclass Rigged {\r\n\r\n    constructor(options) {\r\n        this.init(options)\r\n        this.build()\r\n    }\r\n\r\n    init(options) {\r\n        options = Object.assign({\r\n            container: null,\r\n            template: `div`\r\n        }, options)\r\n        for (let key in options) this[key] = options[key]\r\n    }\r\n\r\n    build() {\r\n        this.elements = _parser__WEBPACK_IMPORTED_MODULE_0__.default.parse(this.template)\r\n        this.elements.map(element => {\r\n            if (element._connector)\r\n                this[element._connector] = element\r\n                this.addMethods(element)\r\n        })\r\n        this.element = this.elements[0]\r\n        this.addMethods(this.element)\r\n        if(this.container) this.container.appendChild(this.element)\r\n    }\r\n\r\n    /**\r\n    * Magic methods\r\n    */\r\n    addMethods(el){\r\n      el.setStyle = (styles)=>{\r\n        return this.setStyle(styles, el)\r\n      }\r\n      el.remove = ()=>{\r\n        this.remove(el)\r\n      }\r\n      el.clear = ()=>{\r\n        this.clear(el)\r\n      }\r\n      el.selectOne = (selector)=>{\r\n        return this.selectOne(selector, el)\r\n      }\r\n      el.selectAll = (selector)=>{\r\n        return this.selectAll(selector, el)\r\n      }\r\n    }\r\n\r\n    setStyle(styles, el){\r\n      for(let key in styles) el.style[key] = styles[key]\r\n      return el\r\n    }\r\n\r\n    selectOne(selector, el){\r\n        return el.querySelector(selector)\r\n    }\r\n\r\n    selectAll(selector, el){\r\n        return [...el.querySelectorAll(selector)]\r\n    }\r\n\r\n    remove(el){\r\n      el.parentElement.removeChild(el)\r\n    }\r\n\r\n    clear(el){\r\n      el.innerHTML = ''\r\n    }\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/rigged/src/rigged.js?");

/***/ }),

/***/ "./src/crawler.js":
/*!************************!*\
  !*** ./src/crawler.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Crawler)\n/* harmony export */ });\nclass Crawler {\r\n\r\n  constructor(url, opts={}){\r\n    this.opts = Object.assign({\r\n      url: url,\r\n      getPageUrl: '/services/get.php',\r\n      depth: null // infinite\r\n    }, opts)\r\n\r\n    this.links = {}\r\n    this.internalCount = 0\r\n    this.externalCount = 0\r\n  }\r\n\r\n  startCrawl(url=null){\r\n    url = url ? url : this.opts.url\r\n    if(!url.match('http')) url = `http://${url}`\r\n    this.host = (new URL(url)).host\r\n    return this.crawl(url)\r\n  }\r\n\r\n  crawl(url){\r\n    return this.get(url)\r\n    .then(res => {\r\n      return Promise.allSettled(\r\n        this.getLinks(res.content)\r\n        .map(l => {\r\n          l = this.addLink(l, url)\r\n          if(l.new && l.link.isExternal) this.externalCount++\r\n          if(l.new && !l.link.isExternal) this.internalCount++\r\n          if(this.opts.onLink) this.opts.onLink(l)\r\n          if(l.new && this.opts.onNewLink) this.opts.onNewLink(l.link)\r\n          return (l.new && !l.link.isExternal) ? l.link : false\r\n        })\r\n        .filter(l => l)\r\n        .map(l => this.crawl(l.url) )\r\n      )\r\n    })\r\n  }\r\n\r\n  get(url){\r\n\r\n    if(!url) return console.error('You must provide at least an url argument to Crawler !')\r\n    return new Promise((ok, nok) => {\r\n      fetch(this.opts.getPageUrl, {\r\n        method: 'POST',\r\n        body: this.getPostData({url: url})\r\n      })\r\n      .then(res => res.json())\r\n      .then(data => {\r\n        if(data.content) return ok(data)\r\n        return nok(data)\r\n      })\r\n    })\r\n\r\n  }\r\n\r\n  getPostData(data){\r\n\r\n    let datas = new FormData()\r\n    for(let key in data) datas.append(key, data[key])\r\n    return datas\r\n\r\n  }\r\n\r\n  getLinks(content){\r\n    let links = [...content.matchAll(/\\<a[^\\>]*?href\\=\\\"([^\"]*?)\\\"/g)]\r\n    links = links.map(l => l[1])\r\n    return links\r\n  }\r\n\r\n  addLink(url, fromPage){\r\n      let l = new Link(url, this.host)\r\n      let isNew = true\r\n      if(!this.links[l.url]) this.links[l.url] = l\r\n      else {\r\n        l = this.links[l.url]\r\n        isNew = false\r\n      }\r\n      l.addPageRef(fromPage)\r\n      return {new: isNew, link: l}\r\n  }\r\n\r\n}\r\n\r\nclass Link {\r\n  constructor(url, host){\r\n    this.pagesIn = []\r\n    if(!url.match('http')) url = (url.length && url != '/') ? `http://${host}/${url}` : `http://${host}`\r\n    this.url = url\r\n    this.host = (new URL(this.url)).host\r\n    this.isExternal = (this.host != host)\r\n  }\r\n  addPageRef(page){\r\n    if(!this.pagesIn.includes(page)) this.pagesIn.push(page)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/crawler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crawler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crawler */ \"./src/crawler.js\");\n/* harmony import */ var rigged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rigged */ \"./node_modules/rigged/src/rigged.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n\r\n  let element = new rigged__WEBPACK_IMPORTED_MODULE_1__.default({ template: `\r\n    div\r\n      input @input [autofocus=\"true\"]\r\n      div @status\r\n      div @pageCount\r\n      div @details\r\n      div @results\r\n        div (internal)\r\n          div @internal\r\n        div (external)\r\n          div @external\r\n    `, container: document.body })\r\n\r\n  element.results.setStyle({\r\n    display: \"flex\"\r\n  })\r\n  element.internal.setStyle({\r\n    display: \"flex\",\r\n    flexDirection: \"column\"\r\n  })\r\n  element.external.setStyle({\r\n    display: \"flex\",\r\n    flexDirection: \"column\"\r\n  })\r\n\r\n  let els = {}\r\n  element.input.addEventListener('keyup', (e)=>{\r\n\r\n    if(e.key == 'Enter') {\r\n      let els = {}\r\n\r\n      let c = new _crawler__WEBPACK_IMPORTED_MODULE_0__.default(element.input.value, {\r\n        onLink: (l)=>{\r\n          element.pageCount.innerHTML = `${c.internalCount} pages crawled`\r\n          if(l.new){\r\n            l = l.link\r\n            let container = element.internal\r\n            if(l.isExternal) container = element.external\r\n            let el = new rigged__WEBPACK_IMPORTED_MODULE_1__.default({template: `\r\n              div\r\n                span @count (1)\r\n                span ( - )\r\n                span @link (${l.url})\r\n              ` , container})\r\n            els[l.url] = el\r\n            el.link.addEventListener('click', ()=>{\r\n              element.details.clear()\r\n              let lEl = new rigged__WEBPACK_IMPORTED_MODULE_1__.default({template: `\r\n                div (${l.url})\r\n                ul (${l.pagesIn.map(url => `<a href=\"${url}\" target=\"_blank\">${url}</a>`).join('<br> ')})\r\n                `, container: element.details})\r\n                lEl.element.setStyle({display: 'flex', flexDirection: 'column'})\r\n              })\r\n          }\r\n\r\n          else {\r\n            l = l.link\r\n            els[l.url].count.innerHTML = l.pagesIn.length\r\n          }\r\n        }\r\n      })\r\n\r\n      element.host = c.host\r\n      element.internal.clear()\r\n      element.external.clear()\r\n\r\n      element.status.innerHTML = 'Crawl in progress...'\r\n      element.pageCount.innerHTML = '0 page crawled'\r\n      let start = Date.now()\r\n      c.startCrawl(element.input.value)\r\n      .then(res => {\r\n        element.status.innerHTML = `Crawl ended in ${ (Date.now() - start ) / 1000}s`\r\n      })\r\n\r\n    }\r\n  })\r\n\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;