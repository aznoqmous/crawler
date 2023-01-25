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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".badge:not(:empty) {\\n  font-size: 0.6em;\\n  font-style: normal;\\n  padding: 0.2em 0.4em;\\n  border-radius: 0.2em;\\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\\n  margin-right: 0.2rem;\\n  font-weight: bold;\\n  background: #fff;\\n  color: #343a40;\\n}\\n.badge:not(:empty).info {\\n  background: #0d6efd;\\n  color: #fff;\\n}\\n.badge:not(:empty).success {\\n  background: #198754;\\n  color: #fff;\\n}\\n.badge:not(:empty).error {\\n  background: #dc3545;\\n  color: #fff;\\n}\\n\\nhtml {\\n  font-family: Arial, sans-serif;\\n}\\n\\ninput, textarea {\\n  padding: 0.5rem;\\n  border-radius: 0.5rem;\\n  margin-bottom: 0.5rem;\\n  display: block;\\n  width: calc(100% - 1rem);\\n  outline: none;\\n  border: 1px solid #6c757d;\\n}\\n\\ntextarea {\\n  resize: none;\\n  overflow: hidden;\\n  min-height: 50px;\\n}\\n\\n.details > div {\\n  padding: 0.6rem 1.2rem;\\n  border-radius: 5px;\\n  margin: 1rem 0;\\n  border: 1px solid #eee;\\n  font-size: 0.8rem;\\n}\\n.details > div .head {\\n  margin-bottom: 1rem;\\n  display: flex;\\n  align-items: center;\\n}\\n.details > div ul, .details > div ol {\\n  height: 200px;\\n  overflow-y: scroll;\\n  border: 1px solid #eee;\\n  border-radius: 5px;\\n  padding-left: 2.5em;\\n}\\n\\n.results {\\n  display: flex;\\n  margin-top: 1rem;\\n}\\n.results .links {\\n  width: 50%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.results .links > .count strong {\\n  margin-right: 0.2em;\\n}\\n.results .links > div > .link {\\n  cursor: pointer;\\n}\\n.results .links > div > .link span {\\n  color: #343a40;\\n  font-size: 0.8rem;\\n}\\n.results .links > div > .link:hover span {\\n  color: #000;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://crawler/./scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://crawler/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/rigged/src/parser.js":
/*!*******************************************!*\
  !*** ./node_modules/rigged/src/parser.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Parser)\n/* harmony export */ });\nclass Parser{\r\n\r\n  static parse(template) {\r\n      let parsed = template.trim().split('\\n')\r\n      let tree = []\r\n      let lastIndent = 0\r\n      let lastEl = null\r\n\r\n      if (!parsed.length) return null\r\n\r\n      parsed = parsed.map((str, i) => {\r\n\r\n          let tag = str.trim().match(/^[^ ]*/)[0]\r\n\r\n          let el = document.createElement(tag)\r\n\r\n          let id = Parser.parseId(str)\r\n          if (id) el.id = id\r\n\r\n          let connector = Parser.parseConnector(str)\r\n          if(connector) el._connector = connector\r\n\r\n          let classes = Parser.parseClasses(str)\r\n          if (classes) classes.map(cls => el.classList.add(cls))\r\n\r\n          let attributes = Parser.parseAttributes(str)\r\n          if(attributes) attributes.map(attr => {\r\n            el.setAttribute(attr.key, attr.value)\r\n          })\r\n\r\n          let content = Parser.parseContent(str)\r\n          if(content) el.innerHTML = content\r\n\r\n          let indent = str.match(/^\\ */)[0].length\r\n\r\n\r\n          if (!tree.length) {\r\n              tree.push(el)\r\n          } else {\r\n\r\n              // remove one from tree then append inside parent\r\n              if (indent < lastIndent) {\r\n                  tree.splice(tree.length-1, 1)\r\n                  tree[tree.length - 1].appendChild(el)\r\n              }\r\n              else if(indent > lastIndent) {\r\n                  if(!tree.includes(lastEl)) tree.push(lastEl)\r\n                  lastEl.appendChild(el)\r\n              }\r\n              else {\r\n                  tree[tree.length - 1].appendChild(el)\r\n              }\r\n          }\r\n\r\n          lastIndent = indent\r\n          lastEl = el\r\n          return el\r\n      })\r\n\r\n      return parsed\r\n  }\r\n\r\n  static removeAttributes(str){\r\n    return str.replace(/\\[[^\\[\\]]*?\\]/gs, '')\r\n  }\r\n\r\n  static removeContent(str){\r\n    return str.replace(/\\([^\\(\\)]*?\\)/gs, '')\r\n  }\r\n\r\n  static parseClasses(str) {\r\n      str = Parser.removeAttributes(str)\r\n      str = Parser.removeContent(str)\r\n\r\n      str = str.match(/\\.[^\\.\\ ]*/gms)\r\n\r\n      if(!str) return null\r\n      return str.map(cls => cls.replace(/\\./, ''))\r\n  }\r\n\r\n  static parseId(str) {\r\n      str = Parser.removeContent(str)\r\n      str = str.match(/\\#[^\\#\\. ]*/)\r\n      if(str) return str[0].replace(/#/, '')\r\n      return null\r\n  }\r\n\r\n  static parseConnector(str){\r\n    str = Parser.removeContent(str)\r\n    let connector = str.match(/\\@[^\\@\\. ]*/)\r\n    if(connector) return connector[0].replace(/@/, '')\r\n    return null\r\n  }\r\n\r\n  static parseAttributes(str) {\r\n      str = Parser.removeContent(str)\r\n      str = str.match(/\\[[^\\]]*\\]/gm)\r\n      if(!str) return null\r\n      return str.map(attr => {\r\n        let key = attr.replace('[', '').replace(/\\=.*?$/, '')\r\n        let value = attr.match(/\\\".*?\\\"/)[0].replaceAll('\"', '')\r\n        return {key, value}\r\n      })\r\n  }\r\n\r\n  static parseContent(str){\r\n      str = str.match(/\\([^\\)]*\\)/)\r\n      if(!str) return \"\"\r\n      str = str[0].replace(/[\\(|\\)]/gs, '')\r\n      return str\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://crawler/./node_modules/rigged/src/parser.js?");

/***/ }),

/***/ "./node_modules/rigged/src/rigged.js":
/*!*******************************************!*\
  !*** ./node_modules/rigged/src/rigged.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rigged)\n/* harmony export */ });\n/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ \"./node_modules/rigged/src/parser.js\");\n\nclass Rigged {\n\n    constructor(options) {\n        this.init(options)\n        this.build()\n    }\n\n    init(options) {\n        options = Object.assign({\n            container: null,\n            template: `div`\n        }, options)\n        for (let key in options) this[key] = options[key]\n    }\n\n    build() {\n        this.elements = _parser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parse(this.template)\n        this.elements.map(element => {\n            if (element._connector)\n                this[element._connector] = element\n                this.addMethods(element)\n        })\n        this.element = this.elements[0]\n        this.addMethods(this.element)\n        if(this.container) this.container.appendChild(this.element)\n    }\n\n    /**\n    * Magic methods\n    */\n    addMethods(el){\n      el.setStyle = (styles)=>{\n        return this.setStyle(styles, el)\n      }\n      el.remove = ()=>{\n        this.remove(el)\n      }\n      el.clear = ()=>{\n        this.clear(el)\n      }\n      el.selectOne = (selector)=>{\n        return this.selectOne(selector, el)\n      }\n      el.selectAll = (selector)=>{\n        return this.selectAll(selector, el)\n      }\n    }\n\n    setStyle(styles, el=null){\n      if(!el) el = this.element\n      for(let key in styles) el.style[key] = styles[key]\n      return el\n    }\n\n    selectOne(selector, el=null){\n        if(!el) el = this.element\n        return el.querySelector(selector)\n    }\n\n    selectAll(selector, el=null){\n        if(!el) el = this.element\n        return [...el.querySelectorAll(selector)]\n    }\n\n    remove(el=null){\n      if(!el) el = this.element\n      el.parentElement.removeChild(el)\n    }\n\n    clear(el=null){\n      if(!el) el = this.element\n      el.innerHTML = ''\n    }\n\n\n}\n\n\n//# sourceURL=webpack://crawler/./node_modules/rigged/src/rigged.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack://crawler/./scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://crawler/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/crawler.js":
/*!************************!*\
  !*** ./src/crawler.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Crawler)\n/* harmony export */ });\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link */ \"./src/link.js\");\n\r\n\r\nclass Crawler {\r\n\r\n  constructor(url, opts={}){\r\n    this.opts = Object.assign({\r\n      url: url,\r\n      getPageUrl: '/services/get.php',\r\n      depth: null, // infinite\r\n      headers: {}\r\n    }, opts)\r\n\r\n    this.links = {}\r\n    this.internalCount = 0\r\n    this.externalCount = 0\r\n  }\r\n\r\n  startCrawl(url=null){\r\n    url = url ? url : this.opts.url\r\n    if(!url.match('http')) url = `http://${url}`\r\n    this.host = (new URL(url)).host\r\n    this.origin = (new URL(url)).origin\r\n    return this.crawl(url)\r\n  }\r\n\r\n  crawl(url){\r\n    return this.get(url)\r\n    .then(res => {\r\n      let link = this.getLink(url)\r\n      if(link) link.status = res.http_code\r\n      if(this.opts.onCrawl) this.opts.onCrawl(link)\r\n      if(this.opts.onCrawlResponse) this.opts.onCrawlResponse(res)\r\n      return Promise.allSettled(\r\n        this.getLinks(res.content)\r\n        .map(l => {\r\n          l = this.addLink(l, url)\r\n          if(l.new && l.link.isExternal) this.externalCount++\r\n          if(l.new && !l.link.isExternal) this.internalCount++\r\n          if(this.opts.onLink) this.opts.onLink(l)\r\n          if(l.new && this.opts.onNewLink) this.opts.onNewLink(l.link)\r\n          return (l.new && !l.link.isExternal) ? l.link : false\r\n        })\r\n        .filter(l => l)\r\n        .map(l => this.crawl(l.url) )\r\n      )\r\n\r\n    })\r\n    .catch(e => console.log(e))\r\n  }\r\n\r\n  get(url){\r\n    if(!url) return console.error('You must provide at least an url argument to Crawler !')\r\n    return new Promise((ok, nok) => {\r\n      fetch(this.opts.getPageUrl, {\r\n        method: 'POST',\r\n        body: this.getPostData({\r\n          url,\r\n          headers: this.opts.headers\r\n        })\r\n      })\r\n      .then(res => res.json())\r\n      .then(data => {\r\n        if(data.content) return ok(data)\r\n        return nok(data)\r\n      })\r\n    })\r\n\r\n  }\r\n\r\n  getPostData(data){\r\n\r\n    let datas = new FormData()\r\n    for(let key in data) datas.append(key, data[key])\r\n    return datas\r\n\r\n  }\r\n\r\n  getLinks(content){\r\n    let links = [...content.matchAll(/\\<a[^\\>]*?href\\=[\\\"|\\']([^\\\"\\']*?)[\\\"|\\']/g)]\r\n    links = links.map(l => l[1])\r\n    links = links.filter(l => l.length)\r\n\r\n    let ban = ['mailto:', 'javascript:', 'tel:', '\\.jpg', '.png', '.svg', '.pdf', '_profiler']\r\n    ban.map(b => {\r\n        links = links.filter(l => !l.match(b) ? true : false)\r\n    })\r\n    return links\r\n  }\r\n\r\n  getLink(url){\r\n    return this.links[url]\r\n  }\r\n\r\n  addLink(url, fromPage){\r\n      let l = new _link__WEBPACK_IMPORTED_MODULE_0__[\"default\"](url, this.origin)\r\n\r\n      let isNew = true\r\n      if(!this.links[l.url]) this.links[l.url] = l\r\n      else {\r\n        l = this.links[l.url]\r\n        isNew = false\r\n      }\r\n      l.addPageRef(fromPage)\r\n      return {new: isNew, link: l}\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://crawler/./src/crawler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crawler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crawler */ \"./src/crawler.js\");\n/* harmony import */ var rigged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rigged */ \"./node_modules/rigged/src/rigged.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n\r\n  let currentUrl = new URL(window.location.href)\r\n  let searchUrl = (new URLSearchParams(currentUrl.search)).get('url')\r\n\r\n  let element = new rigged__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ template: `\r\n    div\r\n      input @input [autofocus=\"true\"][placeholder=\"URL\"]\r\n      textarea @headers [placeholder=\"Headers\"]\r\n      div @status\r\n      div @pageCount\r\n      div @pageStatuses\r\n      div @details .details\r\n      div @results .results\r\n        div .internal.links\r\n          div .count\r\n            strong (internal)\r\n            strong @internalCount\r\n          div .copy @copyInternal (copy as text)\r\n          div @internal\r\n        div .external.links\r\n          div .count\r\n            strong (external)\r\n            strong @externalCount\r\n          div @external\r\n    `, container: document.body })\r\n\r\n  if(searchUrl) element.input.value = searchUrl\r\n\r\n  if(element.input.value) crawl()\r\n  element.headers.addEventListener('input', (e)=>{\r\n    element.headers.style.height = \"5px\";\r\n    element.headers.style.height = (element.headers.scrollHeight)+\"px\";\r\n  })\r\n  element.input.addEventListener('keyup', (e)=>{\r\n    if(e.key == 'Enter') {\r\n      crawl()\r\n    }\r\n  })\r\n  \r\n  let c;\r\n\r\n  element.copyInternal.addEventListener('click', ()=>{\r\n    if(!c) return;\r\n    let content = Object.values(c.links).filter(l => !l.isExternal).map(l => l.url).sort((a,b) => a > b ? 1 : -1).join(\"\\r\\n\")\r\n    navigator.clipboard.writeText(content)\r\n  })\r\n\r\n  function crawl(){\r\n    let els = {}\r\n\r\n    c = new _crawler__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element.input.value, {\r\n      headers: element.headers.value.replace('\\r').split('\\n'),\r\n      onLink: (l)=>{\r\n        element.pageCount.innerHTML = `${c.internalCount} internal pages crawled`\r\n        if(l.new){\r\n          l = l.link\r\n          let container = element.internal\r\n          if(l.isExternal) container = element.external\r\n          let el = new rigged__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({template: `\r\n            div .link\r\n              i @status .status.badge (${l.isExternal ? '' : 'fetching...'})\r\n              i @count .count.badge (1)\r\n              span @link (${l.url})\r\n            ` , container})\r\n          els[l.url] = el\r\n          el.link.addEventListener('click', ()=>{\r\n            element.details.clear()\r\n            let lEl = new rigged__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({template: `\r\n              div\r\n                div .head\r\n                    i @status .badge (${l.status ? l.status : ''})\r\n                    a [href=\"${l.url}\"] [target=\"_blank\"] (${l.url})\r\n                div (Link can be found on ${l.pagesIn.length} pages : )\r\n                ol (${l.pagesIn.map(url => `<li><a href=\"${url}\" target=\"_blank\">${url}</a></li>`).join('')})\r\n              `, container: element.details})\r\n              if(l.status){\r\n                  if(l.status == 200) lEl.status.classList.add('success')\r\n                  else lEl.status.classList.add('error')\r\n              }\r\n            })\r\n\r\n        }\r\n        else {\r\n          l = l.link\r\n          els[l.url].count.innerHTML = l.pagesIn.length\r\n        }\r\n        element.internalCount.innerHTML = element.internal.children.length\r\n        element.externalCount.innerHTML = element.external.children.length\r\n      },\r\n      onCrawl: (l)=>{\r\n        if(l) {\r\n           els[l.url].status.innerHTML = l.status\r\n           if(l.status == 200) els[l.url].status.classList.add('success')\r\n           else els[l.url].status.classList.add('error')\r\n        }\r\n      }\r\n    })\r\n\r\n    element.host = c.host\r\n    element.internal.clear()\r\n    element.external.clear()\r\n    element.pageStatuses.clear()\r\n\r\n    element.status.innerHTML = 'Crawl in progress...'\r\n    element.pageCount.innerHTML = '0 internal page crawled'\r\n    let start = Date.now()\r\n    c.startCrawl(element.input.value)\r\n    .then(res => {\r\n      element.status.innerHTML = `Crawl ended in ${ (Date.now() - start ) / 1000}s`\r\n      sortLinks(element.internal)\r\n      sortLinks(element.external)\r\n      displayPageStatuses(element.internal)\r\n    })\r\n  }\r\n\r\n  function sortLinks(container){\r\n    let links = [...container.children]\r\n    links.map(l => {\r\n      let count = parseInt(l.querySelector('.count').innerHTML)\r\n      return {l, count}\r\n    })\r\n    .sort((a, b)=> (a.count < b.count) ? 1 : -1 )\r\n    .map(l => {\r\n      container.appendChild(l.l)\r\n    })\r\n  }\r\n\r\n  function displayPageStatuses(container){\r\n      let statusesEl = [...container.querySelectorAll('.status')]\r\n      let statuses = {}\r\n\r\n      statusesEl.map(s => {\r\n          let status = parseInt(s.innerHTML)\r\n          if(!statuses[status]) statuses[status] = 1\r\n          else statuses[status] += 1\r\n      })\r\n\r\n      for(let status in statuses){\r\n        fetch(`http://httpstat.us/${status}`)\r\n        .then(res => res.text())\r\n        .then(text => {\r\n          new rigged__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({template: `\r\n            div\r\n            i .badge ${ (status == 200) ? '.success' : '.error'} (${text})\r\n            span (${statuses[status] ? statuses[status] + \" pages\" : \"0 page\"})\r\n            `, container: element.pageStatuses})\r\n\r\n        })\r\n      }\r\n\r\n  }\r\n\r\n})\r\n\n\n//# sourceURL=webpack://crawler/./src/index.js?");

/***/ }),

/***/ "./src/link.js":
/*!*********************!*\
  !*** ./src/link.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Link)\n/* harmony export */ });\nclass Link {\r\n\r\n  constructor(url, host){\r\n    this.init(url, host)\r\n\r\n    this.pagesIn = []\r\n    this.status = null\r\n  }\r\n\r\n  init(url, host){\r\n    url = url.replace(/#.*?$/, '') // rm anchor\r\n    url = url.replace(/\\?.*?$/, '') // rm params\r\n\r\n    /*if(url.match(/^[^\\/]*?\\./)) {\r\n      let filesExt = '.html|.php'\r\n      if(!url.match(`/[${filesExt}]/`)) {\r\n        if(!url.match(/^http/)) url = `http://${url}`\r\n      }\r\n    }*/\r\n\r\n    url = decodeURIComponent(JSON.parse('\"' + url + '\"'))\r\n\r\n    //if(!url.match(/^http/)) url = (url.length && url != '/') ? `http://${host}/${url}` : `http://${host}`\r\n    this.urlItem = new URL(url, host)\r\n    this.url = this.urlItem.href\r\n    this.host = this.urlItem.origin\r\n    this.isExternal = (this.host != host)\r\n  }\r\n\r\n  addPageRef(page){\r\n    if(!this.pagesIn.includes(page)) this.pagesIn.push(page)\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://crawler/./src/link.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;