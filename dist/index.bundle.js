"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Northwell.ttf */ "./src/Northwell.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! hindilike.ttf */ "./src/hindilike.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! trench100.ttf */ "./src/trench100.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'heading';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('opentype');
}

@font-face {
    font-family: 'hindilike';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}

@font-face {
    font-family: 'menufont';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
}

html {
    height: 100%;
}

body {
    margin: 0px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.header {
    color: #a2a59e;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 100px;
    transform: scale(1.2);
}
.title {
    font-size: 75px;
    font-family: 'heading';
    margin-bottom: -20px;
    text-decoration: underline 2px #494449;
    text-underline-offset: 5px;
}

.description {
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    letter-spacing: 5px;
    margin-bottom: 20px;
}

.header .menu {
    font-size: 30px;
    background-color: rgba(243, 56, 23, 0.4);
    color: white;
    padding: 5px 20px;
    border-radius: 4px;
    transition: 1s;
    font-family: 'hindilike', serif;
    
}
.header .menu:hover {
    transform: scale(0.9);
    cursor: pointer;
}

.tabs {
    margin-top: 20px;
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 100px;
    color: #a2a59e;
}

.tabs div {
    border: 1px solid #313130;;
    color: #a2a59e;
    padding: 5px 20px;
    border-radius: 3px;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    transition: 0.5s;
}

.tabs div:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.menucontainer {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 500px;
    margin: 30px;
    border-radius: 10px;
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;
    margin: auto;
    padding: 60px 100px;
    font-family:  'menufont', Helvetica, sans-serif;
    background-image: linear-gradient(rgb(165, 39, 39),rgb(199, 107, 31) );
}
.menuheading {
    font-size: 40px;
    font-weight: bold;
    font-family: 'hindilike';
}
.menusubheading {
    font-size: 30px;
    font-weight: bold;
}
.item {
    display: grid;
    grid-template-columns: 1fr 3fr 3fr;
    width: 100%;
    align-items: center;
    gap: 20px;
    font-size: 25px;
}

.price {
    text-align: right;
}

.menucontainer img {
    width: 100px;
    border-radius: 50%;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,+DAA0C;AAC9C;;AAEA;IACI,wBAAwB;IACxB,+DAA0C;AAC9C;;AAEA;IACI,uBAAuB;IACvB,+DAA0C;AAC9C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,yDAA4C;IAC5C,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;AAChC;;AAEA;IACI,cAAc;IACd,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,sBAAsB;IACtB,oBAAoB;IACpB,sCAAsC;IACtC,0BAA0B;AAC9B;;AAEA;IACI,kCAAkC;IAClC,eAAe;IACf,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,wCAAwC;IACxC,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,+BAA+B;;AAEnC;AACA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,kCAAkC;IAClC,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,mBAAmB;IACnB,+CAA+C;IAC/C,sEAAsE;AAC1E;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,wBAAwB;AAC5B;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,WAAW;IACX,mBAAmB;IACnB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: 'heading';\n    src: url(Northwell.ttf) format('opentype');\n}\n\n@font-face {\n    font-family: 'hindilike';\n    src: url(hindilike.ttf) format('truetype');\n}\n\n@font-face {\n    font-family: 'menufont';\n    src: url(trench100.ttf) format('truetype');\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    margin: 0px;\n    background-image: url(../src/background.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n\n.header {\n    color: #a2a59e;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    top: 100px;\n    transform: scale(1.2);\n}\n.title {\n    font-size: 75px;\n    font-family: 'heading';\n    margin-bottom: -20px;\n    text-decoration: underline 2px #494449;\n    text-underline-offset: 5px;\n}\n\n.description {\n    font-family: Helvetica, sans-serif;\n    font-size: 18px;\n    letter-spacing: 5px;\n    margin-bottom: 20px;\n}\n\n.header .menu {\n    font-size: 30px;\n    background-color: rgba(243, 56, 23, 0.4);\n    color: white;\n    padding: 5px 20px;\n    border-radius: 4px;\n    transition: 1s;\n    font-family: 'hindilike', serif;\n    \n}\n.header .menu:hover {\n    transform: scale(0.9);\n    cursor: pointer;\n}\n\n.tabs {\n    margin-top: 20px;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n    color: #a2a59e;\n}\n\n.tabs div {\n    border: 1px solid #313130;;\n    color: #a2a59e;\n    padding: 5px 20px;\n    border-radius: 3px;\n    font-family: Helvetica, sans-serif;\n    font-weight: bold;\n    transition: 0.5s;\n}\n\n.tabs div:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n.menucontainer {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    width: 500px;\n    margin: 30px;\n    border-radius: 10px;\n    position: absolute;\n    top: 120px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    padding: 60px 100px;\n    font-family:  'menufont', Helvetica, sans-serif;\n    background-image: linear-gradient(rgb(165, 39, 39),rgb(199, 107, 31) );\n}\n.menuheading {\n    font-size: 40px;\n    font-weight: bold;\n    font-family: 'hindilike';\n}\n.menusubheading {\n    font-size: 30px;\n    font-weight: bold;\n}\n.item {\n    display: grid;\n    grid-template-columns: 1fr 3fr 3fr;\n    width: 100%;\n    align-items: center;\n    gap: 20px;\n    font-size: 25px;\n}\n\n.price {\n    text-align: right;\n}\n\n.menucontainer img {\n    width: 100px;\n    border-radius: 50%;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



function Displayhomepage() {
    const header = document.createElement('div');
    const title = document.createElement('div');
    const description = document.createElement('div');
    const headerMenu = document.createElement('div');

    const tabs = document.createElement('div');
    const menu = document.createElement('div');
    const home =document.createElement('div');
    const about = document.createElement('div');

    title.innerHTML = "The APJ Restaurant";
    description.innerHTML = "where flavor meets friends";
    headerMenu.innerHTML = "Check out our menu";

    menu.innerHTML = "Menu";
    home.innerHTML = "Home";
    about.innerHTML = "About";

    header.classList.add('header');
    title.classList.add('title');
    description.classList.add('description');
    headerMenu.classList.add('menu');

    tabs.classList.add('tabs');
    menu.classList.add('menu');
    menu.setAttribute('id', 'menu');
    home.classList.add('home');
    about.classList.add('about');

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(about);

    header.appendChild(title);
    header.appendChild(description);
    header.appendChild(headerMenu);

    document.body.appendChild(tabs);
    document.body.appendChild(header);
}

Displayhomepage();

const menubuttons = document.querySelectorAll('.menu');

menubuttons.forEach(btn => {
    btn.addEventListener('click',_menu_js__WEBPACK_IMPORTED_MODULE_1__.displayMenu);
});

const home = document.querySelector('.home');

home.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.removeMenu);



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMenu: () => (/* binding */ displayMenu),
/* harmony export */   removeMenu: () => (/* binding */ removeMenu)
/* harmony export */ });
/* harmony import */ var _menuImages_butterchicken_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuImages/butterchicken.jpg */ "./src/menuImages/butterchicken.jpg");
/* harmony import */ var _menuImages_shahipaneer_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuImages/shahipaneer.jpg */ "./src/menuImages/shahipaneer.jpg");
/* harmony import */ var _menuImages_bhindi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuImages/bhindi.jpg */ "./src/menuImages/bhindi.jpg");
/* harmony import */ var _menuImages_dalmakhni_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuImages/dalmakhni.jpg */ "./src/menuImages/dalmakhni.jpg");
/* harmony import */ var _menuImages_butternaan_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuImages/butternaan.jpg */ "./src/menuImages/butternaan.jpg");
/* harmony import */ var _menuImages_roti_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuImages/roti.jpg */ "./src/menuImages/roti.jpg");
/* harmony import */ var _menuImages_jeerarice_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuImages/jeerarice.jpg */ "./src/menuImages/jeerarice.jpg");









const menucontainer = document.createElement('div');
let isPresent=false;

function displayMenu() {

    if (!isPresent) {
        menucontainer.classList.add('menucontainer');

        const menuheading = document.createElement('div');
        menuheading.classList.add('menuheading');
        menuheading.innerHTML = 'Our Food Menu';

        const menusubheading1 = document.createElement('div');
        menusubheading1.classList.add('menusubheading');
        menusubheading1.innerHTML = 'The Good Stuff';

        const item1 = document.createElement('div');
        item1.classList.add('item');
        const butterChickenImage = new Image();
        butterChickenImage.src = _menuImages_butterchicken_jpg__WEBPACK_IMPORTED_MODULE_0__;
        const butterChickenHeading = document.createElement('div');
        const butterChickenPrice = document.createElement('div');
        butterChickenHeading.innerHTML = 'Butter Chicken';
        butterChickenPrice.innerHTML = '$40';
        butterChickenPrice.classList.add('price');

        item1.appendChild(butterChickenImage);
        item1.appendChild(butterChickenHeading);
        item1.appendChild(butterChickenPrice);


        const item2 = document.createElement('div');
        item2.classList.add('item');
        const shahiPaneerImage = new Image();
        shahiPaneerImage.src = _menuImages_shahipaneer_jpg__WEBPACK_IMPORTED_MODULE_1__;
        const shahiPaneerHeading = document.createElement('div');
        const shahiPaneerPrice = document.createElement('div');
        shahiPaneerHeading.innerHTML = 'Butter Chicken';
        shahiPaneerPrice.innerHTML = '$40';
        shahiPaneerPrice.classList.add('price');

        item2.appendChild(shahiPaneerImage);
        item2.appendChild(shahiPaneerHeading);
        item2.appendChild(shahiPaneerPrice);

        const item3 = document.createElement('div');
        item3.classList.add('item');
        const bhindiImage = new Image();
        bhindiImage.src = _menuImages_bhindi_jpg__WEBPACK_IMPORTED_MODULE_2__;
        const bhindiHeading = document.createElement('div');
        const bhindiPrice = document.createElement('div');
        bhindiHeading.innerHTML = 'Bhindi Sabzi';
        bhindiPrice.innerHTML = '$40';
        bhindiPrice.classList.add('price');

        item3.appendChild(bhindiImage);
        item3.appendChild(bhindiHeading);
        item3.appendChild(bhindiPrice);

        const item4 = document.createElement('div');
        item4.classList.add('item');
        const dalImage = new Image();
        dalImage.src = _menuImages_dalmakhni_jpg__WEBPACK_IMPORTED_MODULE_3__;
        const dalHeading = document.createElement('div');
        const dalPrice = document.createElement('div');
        dalHeading.innerHTML = 'Butter Chicken';
        dalPrice.innerHTML = '$40';
        dalPrice.classList.add('price');

        item4.appendChild(dalImage);
        item4.appendChild(dalHeading);
        item4.appendChild(dalPrice);

        const menusubheading2 = document.createElement('div');
        menusubheading2.classList.add('menusubheading');
        menusubheading2.innerHTML = 'Breads';

        const item5 = document.createElement('div');
        item5.classList.add('item');
        const naanImage = new Image();
        naanImage.src = _menuImages_butternaan_jpg__WEBPACK_IMPORTED_MODULE_4__;
        const naanHeading = document.createElement('div');
        const naanPrice = document.createElement('div');
        naanHeading.innerHTML = 'Butter Naan';
        naanPrice.innerHTML = '$40';
        naanPrice.classList.add('price');

        item5.appendChild(naanImage);
        item5.appendChild(naanHeading);
        item5.appendChild(naanPrice);

        const item6 = document.createElement('div');
        item6.classList.add('item');
        const rotiImage = new Image();
        rotiImage.src = _menuImages_roti_jpg__WEBPACK_IMPORTED_MODULE_5__;
        const rotiHeading = document.createElement('div');
        const rotiPrice = document.createElement('div');
        rotiHeading.innerHTML = 'Tawa Roti';
        rotiPrice.innerHTML = '$40';
        rotiPrice.classList.add('price');

        item6.appendChild(rotiImage);
        item6.appendChild(rotiHeading);
        item6.appendChild(rotiPrice);

        const menusubheading3 = document.createElement('div');
        menusubheading3.classList.add('menusubheading');
        menusubheading3.innerHTML = 'Rice';

        const item7 = document.createElement('div');
        item7.classList.add('item');
        const riceImage = new Image();
        riceImage.src = _menuImages_jeerarice_jpg__WEBPACK_IMPORTED_MODULE_6__;
        const riceHeading = document.createElement('div');
        const ricePrice = document.createElement('div');
        riceHeading.innerHTML = 'Jeera Rice';
        ricePrice.innerHTML = '$40';
        ricePrice.classList.add('price');

        item7.appendChild(riceImage);
        item7.appendChild(riceHeading);
        item7.appendChild(ricePrice);


        menucontainer.appendChild(menuheading);

        menucontainer.appendChild(menusubheading1);
        menucontainer.appendChild(item1);
        menucontainer.appendChild(item2);
        menucontainer.appendChild(item3);
        menucontainer.appendChild(item4);

        menucontainer.appendChild(menusubheading2);
        menucontainer.appendChild(item5);
        menucontainer.appendChild(item6);

        menucontainer.appendChild(menusubheading3);
        menucontainer.appendChild(item7)



        document.body.appendChild(menucontainer);

        isPresent=true;
    }

    else 
        removeMenu();
}

function removeMenu() {
    document.body.removeChild(menucontainer);
    menucontainer.innerHTML="";
    isPresent=false;
}





/***/ }),

/***/ "./src/Northwell.ttf":
/*!***************************!*\
  !*** ./src/Northwell.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a52fbec45beb94b40ef.ttf";

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60ee3d3d621211c019a2.jpg";

/***/ }),

/***/ "./src/hindilike.ttf":
/*!***************************!*\
  !*** ./src/hindilike.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff3fcda455352aaf7fa3.ttf";

/***/ }),

/***/ "./src/menuImages/bhindi.jpg":
/*!***********************************!*\
  !*** ./src/menuImages/bhindi.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "598979712ac46dd650c2.jpg";

/***/ }),

/***/ "./src/menuImages/butterchicken.jpg":
/*!******************************************!*\
  !*** ./src/menuImages/butterchicken.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "489cc697614fa76d3e2f.jpg";

/***/ }),

/***/ "./src/menuImages/butternaan.jpg":
/*!***************************************!*\
  !*** ./src/menuImages/butternaan.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92f12b827c881768fc43.jpg";

/***/ }),

/***/ "./src/menuImages/dalmakhni.jpg":
/*!**************************************!*\
  !*** ./src/menuImages/dalmakhni.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6ef6cd65dbeee6ba1a4.jpg";

/***/ }),

/***/ "./src/menuImages/jeerarice.jpg":
/*!**************************************!*\
  !*** ./src/menuImages/jeerarice.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "730012c894cd937e6d78.jpg";

/***/ }),

/***/ "./src/menuImages/roti.jpg":
/*!*********************************!*\
  !*** ./src/menuImages/roti.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27cbcb482736aa5f4c14.jpg";

/***/ }),

/***/ "./src/menuImages/shahipaneer.jpg":
/*!****************************************!*\
  !*** ./src/menuImages/shahipaneer.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fac1c48fec98c684aa6a.jpg";

/***/ }),

/***/ "./src/trench100.ttf":
/*!***************************!*\
  !*** ./src/trench100.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21489afca2139b15fd70.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzREFBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpREFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiTm9ydGh3ZWxsLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImhpbmRpbGlrZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJ0cmVuY2gxMDAudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2hlYWRpbmcnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdoaW5kaWxpa2UnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdtZW51Zm9udCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5odG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmhlYWRlciB7XG4gICAgY29sb3I6ICNhMmE1OWU7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMDBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNzVweDtcbiAgICBmb250LWZhbWlseTogJ2hlYWRpbmcnO1xuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDJweCAjNDk0NDQ5O1xuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmhlYWRlciAubWVudSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCA1NiwgMjMsIDAuNCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICBmb250LWZhbWlseTogJ2hpbmRpbGlrZScsIHNlcmlmO1xuICAgIFxufVxuLmhlYWRlciAubWVudTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYnMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTAwcHg7XG4gICAgY29sb3I6ICNhMmE1OWU7XG59XG5cbi50YWJzIGRpdiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMxMzEzMDs7XG4gICAgY29sb3I6ICNhMmE1OWU7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnRhYnMgZGl2OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ubWVudWNvbnRhaW5lciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMzBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTIwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogNjBweCAxMDBweDtcbiAgICBmb250LWZhbWlseTogICdtZW51Zm9udCcsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDE2NSwgMzksIDM5KSxyZ2IoMTk5LCAxMDcsIDMxKSApO1xufVxuLm1lbnVoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdoaW5kaWxpa2UnO1xufVxuLm1lbnVzdWJoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaXRlbSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgM2ZyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnByaWNlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1lbnVjb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsK0RBQTBDO0FBQzlDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtEQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwrREFBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlEQUE0QztJQUM1QyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHNDQUFzQztJQUN0QywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCwrQkFBK0I7O0FBRW5DO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLCtDQUErQztJQUMvQyxzRUFBc0U7QUFDMUU7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2hlYWRpbmcnO1xcbiAgICBzcmM6IHVybChOb3J0aHdlbGwudHRmKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2hpbmRpbGlrZSc7XFxuICAgIHNyYzogdXJsKGhpbmRpbGlrZS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWVudWZvbnQnO1xcbiAgICBzcmM6IHVybCh0cmVuY2gxMDAudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3NyYy9iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBjb2xvcjogI2EyYTU5ZTtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNzVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdoZWFkaW5nJztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDJweCAjNDk0NDQ5O1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIC5tZW51IHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgNTYsIDIzLCAwLjQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbiAgICBmb250LWZhbWlseTogJ2hpbmRpbGlrZScsIHNlcmlmO1xcbiAgICBcXG59XFxuLmhlYWRlciAubWVudTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFicyB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBjb2xvcjogI2EyYTU5ZTtcXG59XFxuXFxuLnRhYnMgZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMxMzEzMDs7XFxuICAgIGNvbG9yOiAjYTJhNTllO1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnRhYnMgZGl2OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5tZW51Y29udGFpbmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTIwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDYwcHggMTAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgJ21lbnVmb250JywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDE2NSwgMzksIDM5KSxyZ2IoMTk5LCAxMDcsIDMxKSApO1xcbn1cXG4ubWVudWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTogJ2hpbmRpbGlrZSc7XFxufVxcbi5tZW51c3ViaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDNmcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ucHJpY2Uge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLm1lbnVjb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7ZGlzcGxheU1lbnUsIHJlbW92ZU1lbnV9IGZyb20gJy4vbWVudS5qcyc7XG5cbmZ1bmN0aW9uIERpc3BsYXlob21lcGFnZSgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob21lID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUaGUgQVBKIFJlc3RhdXJhbnRcIjtcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIndoZXJlIGZsYXZvciBtZWV0cyBmcmllbmRzXCI7XG4gICAgaGVhZGVyTWVudS5pbm5lckhUTUwgPSBcIkNoZWNrIG91dCBvdXIgbWVudVwiO1xuXG4gICAgbWVudS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgICBob21lLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICAgIGFib3V0LmlubmVySFRNTCA9IFwiQWJvdXRcIjtcblxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgaGVhZGVyTWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICB0YWJzLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG5cbiAgICB0YWJzLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgdGFicy5hcHBlbmRDaGlsZChhYm91dCk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlck1lbnUpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJzKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbkRpc3BsYXlob21lcGFnZSgpO1xuXG5jb25zdCBtZW51YnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51Jyk7XG5cbm1lbnVidXR0b25zLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXlNZW51KTtcbn0pO1xuXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZU1lbnUpO1xuXG4iLCJpbXBvcnQgYnV0dGVyQ2hpY2tlbiBmcm9tICcuL21lbnVJbWFnZXMvYnV0dGVyY2hpY2tlbi5qcGcnO1xuaW1wb3J0IHNoYWhpUGFuZWVyIGZyb20gJy4vbWVudUltYWdlcy9zaGFoaXBhbmVlci5qcGcnO1xuaW1wb3J0IGJoaW5kaSBmcm9tICcuL21lbnVJbWFnZXMvYmhpbmRpLmpwZyc7XG5pbXBvcnQgZGFsIGZyb20gJy4vbWVudUltYWdlcy9kYWxtYWtobmkuanBnJztcbmltcG9ydCBuYWFuIGZyb20gJy4vbWVudUltYWdlcy9idXR0ZXJuYWFuLmpwZyc7XG5pbXBvcnQgcm90aSBmcm9tICcuL21lbnVJbWFnZXMvcm90aS5qcGcnO1xuaW1wb3J0IHJpY2UgZnJvbSAnLi9tZW51SW1hZ2VzL2plZXJhcmljZS5qcGcnO1xuXG5cbmNvbnN0IG1lbnVjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxldCBpc1ByZXNlbnQ9ZmFsc2U7XG5cbmZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xuXG4gICAgaWYgKCFpc1ByZXNlbnQpIHtcbiAgICAgICAgbWVudWNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Y29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgbWVudWhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudWhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnbWVudWhlYWRpbmcnKTtcbiAgICAgICAgbWVudWhlYWRpbmcuaW5uZXJIVE1MID0gJ091ciBGb29kIE1lbnUnO1xuXG4gICAgICAgIGNvbnN0IG1lbnVzdWJoZWFkaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51c3ViaGVhZGluZzEuY2xhc3NMaXN0LmFkZCgnbWVudXN1YmhlYWRpbmcnKTtcbiAgICAgICAgbWVudXN1YmhlYWRpbmcxLmlubmVySFRNTCA9ICdUaGUgR29vZCBTdHVmZic7XG5cbiAgICAgICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbTEuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBjb25zdCBidXR0ZXJDaGlja2VuSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYnV0dGVyQ2hpY2tlbkltYWdlLnNyYyA9IGJ1dHRlckNoaWNrZW47XG4gICAgICAgIGNvbnN0IGJ1dHRlckNoaWNrZW5IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGJ1dHRlckNoaWNrZW5QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0ZXJDaGlja2VuSGVhZGluZy5pbm5lckhUTUwgPSAnQnV0dGVyIENoaWNrZW4nO1xuICAgICAgICBidXR0ZXJDaGlja2VuUHJpY2UuaW5uZXJIVE1MID0gJyQ0MCc7XG4gICAgICAgIGJ1dHRlckNoaWNrZW5QcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuXG4gICAgICAgIGl0ZW0xLmFwcGVuZENoaWxkKGJ1dHRlckNoaWNrZW5JbWFnZSk7XG4gICAgICAgIGl0ZW0xLmFwcGVuZENoaWxkKGJ1dHRlckNoaWNrZW5IZWFkaW5nKTtcbiAgICAgICAgaXRlbTEuYXBwZW5kQ2hpbGQoYnV0dGVyQ2hpY2tlblByaWNlKTtcblxuXG4gICAgICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0yLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICAgICAgY29uc3Qgc2hhaGlQYW5lZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzaGFoaVBhbmVlckltYWdlLnNyYyA9IHNoYWhpUGFuZWVyO1xuICAgICAgICBjb25zdCBzaGFoaVBhbmVlckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2hhaGlQYW5lZXJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGFoaVBhbmVlckhlYWRpbmcuaW5uZXJIVE1MID0gJ0J1dHRlciBDaGlja2VuJztcbiAgICAgICAgc2hhaGlQYW5lZXJQcmljZS5pbm5lckhUTUwgPSAnJDQwJztcbiAgICAgICAgc2hhaGlQYW5lZXJQcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuXG4gICAgICAgIGl0ZW0yLmFwcGVuZENoaWxkKHNoYWhpUGFuZWVySW1hZ2UpO1xuICAgICAgICBpdGVtMi5hcHBlbmRDaGlsZChzaGFoaVBhbmVlckhlYWRpbmcpO1xuICAgICAgICBpdGVtMi5hcHBlbmRDaGlsZChzaGFoaVBhbmVlclByaWNlKTtcblxuICAgICAgICBjb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtMy5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgIGNvbnN0IGJoaW5kaUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJoaW5kaUltYWdlLnNyYyA9IGJoaW5kaTtcbiAgICAgICAgY29uc3QgYmhpbmRpSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBiaGluZGlQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiaGluZGlIZWFkaW5nLmlubmVySFRNTCA9ICdCaGluZGkgU2FiemknO1xuICAgICAgICBiaGluZGlQcmljZS5pbm5lckhUTUwgPSAnJDQwJztcbiAgICAgICAgYmhpbmRpUHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcblxuICAgICAgICBpdGVtMy5hcHBlbmRDaGlsZChiaGluZGlJbWFnZSk7XG4gICAgICAgIGl0ZW0zLmFwcGVuZENoaWxkKGJoaW5kaUhlYWRpbmcpO1xuICAgICAgICBpdGVtMy5hcHBlbmRDaGlsZChiaGluZGlQcmljZSk7XG5cbiAgICAgICAgY29uc3QgaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbTQuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBjb25zdCBkYWxJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBkYWxJbWFnZS5zcmMgPSBkYWw7XG4gICAgICAgIGNvbnN0IGRhbEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGFsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGFsSGVhZGluZy5pbm5lckhUTUwgPSAnQnV0dGVyIENoaWNrZW4nO1xuICAgICAgICBkYWxQcmljZS5pbm5lckhUTUwgPSAnJDQwJztcbiAgICAgICAgZGFsUHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcblxuICAgICAgICBpdGVtNC5hcHBlbmRDaGlsZChkYWxJbWFnZSk7XG4gICAgICAgIGl0ZW00LmFwcGVuZENoaWxkKGRhbEhlYWRpbmcpO1xuICAgICAgICBpdGVtNC5hcHBlbmRDaGlsZChkYWxQcmljZSk7XG5cbiAgICAgICAgY29uc3QgbWVudXN1YmhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVzdWJoZWFkaW5nMi5jbGFzc0xpc3QuYWRkKCdtZW51c3ViaGVhZGluZycpO1xuICAgICAgICBtZW51c3ViaGVhZGluZzIuaW5uZXJIVE1MID0gJ0JyZWFkcyc7XG5cbiAgICAgICAgY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbTUuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBjb25zdCBuYWFuSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmFhbkltYWdlLnNyYyA9IG5hYW47XG4gICAgICAgIGNvbnN0IG5hYW5IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG5hYW5QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYWFuSGVhZGluZy5pbm5lckhUTUwgPSAnQnV0dGVyIE5hYW4nO1xuICAgICAgICBuYWFuUHJpY2UuaW5uZXJIVE1MID0gJyQ0MCc7XG4gICAgICAgIG5hYW5QcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuXG4gICAgICAgIGl0ZW01LmFwcGVuZENoaWxkKG5hYW5JbWFnZSk7XG4gICAgICAgIGl0ZW01LmFwcGVuZENoaWxkKG5hYW5IZWFkaW5nKTtcbiAgICAgICAgaXRlbTUuYXBwZW5kQ2hpbGQobmFhblByaWNlKTtcblxuICAgICAgICBjb25zdCBpdGVtNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtNi5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgIGNvbnN0IHJvdGlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICByb3RpSW1hZ2Uuc3JjID0gcm90aTtcbiAgICAgICAgY29uc3Qgcm90aUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm90aVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvdGlIZWFkaW5nLmlubmVySFRNTCA9ICdUYXdhIFJvdGknO1xuICAgICAgICByb3RpUHJpY2UuaW5uZXJIVE1MID0gJyQ0MCc7XG4gICAgICAgIHJvdGlQcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuXG4gICAgICAgIGl0ZW02LmFwcGVuZENoaWxkKHJvdGlJbWFnZSk7XG4gICAgICAgIGl0ZW02LmFwcGVuZENoaWxkKHJvdGlIZWFkaW5nKTtcbiAgICAgICAgaXRlbTYuYXBwZW5kQ2hpbGQocm90aVByaWNlKTtcblxuICAgICAgICBjb25zdCBtZW51c3ViaGVhZGluZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudXN1YmhlYWRpbmczLmNsYXNzTGlzdC5hZGQoJ21lbnVzdWJoZWFkaW5nJyk7XG4gICAgICAgIG1lbnVzdWJoZWFkaW5nMy5pbm5lckhUTUwgPSAnUmljZSc7XG5cbiAgICAgICAgY29uc3QgaXRlbTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbTcuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBjb25zdCByaWNlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcmljZUltYWdlLnNyYyA9IHJpY2U7XG4gICAgICAgIGNvbnN0IHJpY2VIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJpY2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaWNlSGVhZGluZy5pbm5lckhUTUwgPSAnSmVlcmEgUmljZSc7XG4gICAgICAgIHJpY2VQcmljZS5pbm5lckhUTUwgPSAnJDQwJztcbiAgICAgICAgcmljZVByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG5cbiAgICAgICAgaXRlbTcuYXBwZW5kQ2hpbGQocmljZUltYWdlKTtcbiAgICAgICAgaXRlbTcuYXBwZW5kQ2hpbGQocmljZUhlYWRpbmcpO1xuICAgICAgICBpdGVtNy5hcHBlbmRDaGlsZChyaWNlUHJpY2UpO1xuXG5cbiAgICAgICAgbWVudWNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51aGVhZGluZyk7XG5cbiAgICAgICAgbWVudWNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51c3ViaGVhZGluZzEpO1xuICAgICAgICBtZW51Y29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0xKTtcbiAgICAgICAgbWVudWNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtMik7XG4gICAgICAgIG1lbnVjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbTMpO1xuICAgICAgICBtZW51Y29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW00KTtcblxuICAgICAgICBtZW51Y29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVzdWJoZWFkaW5nMik7XG4gICAgICAgIG1lbnVjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbTUpO1xuICAgICAgICBtZW51Y29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW02KTtcblxuICAgICAgICBtZW51Y29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVzdWJoZWFkaW5nMyk7XG4gICAgICAgIG1lbnVjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbTcpXG5cblxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudWNvbnRhaW5lcik7XG5cbiAgICAgICAgaXNQcmVzZW50PXRydWU7XG4gICAgfVxuXG4gICAgZWxzZSBcbiAgICAgICAgcmVtb3ZlTWVudSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVNZW51KCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWVudWNvbnRhaW5lcik7XG4gICAgbWVudWNvbnRhaW5lci5pbm5lckhUTUw9XCJcIjtcbiAgICBpc1ByZXNlbnQ9ZmFsc2U7XG59XG5cblxuXG5leHBvcnQgeyBkaXNwbGF5TWVudSwgcmVtb3ZlTWVudSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==