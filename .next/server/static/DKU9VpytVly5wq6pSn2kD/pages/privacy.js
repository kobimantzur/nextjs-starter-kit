module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bc+":
/***/ (function(module, exports) {



/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1T23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZdeI");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const defaultAvatar = __webpack_require__("W7qB");

class UserInfo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      userDetails,
      additionalSecondaryTitle
    } = this.props;
    if (!userDetails || !userDetails.firstName) return null;
    const userImage = userDetails.profilePictureUrl || defaultAvatar;
    const userName = `${userDetails.firstName} ${userDetails.lastName}`;
    let secondaryTitle = userDetails.headline || '';
    secondaryTitle += secondaryTitle && additionalSecondaryTitle ? ' | ' : '';
    secondaryTitle += additionalSecondaryTitle || '';
    return __jsx("div", {
      className: "user-info"
    }, __jsx("div", {
      className: "avatar-wrapper"
    }, __jsx("img", {
      src: userImage,
      className: "avatar",
      alt: userName
    })), __jsx("div", {
      className: "user-details"
    }, __jsx("p", {
      className: "name"
    }, `${userDetails.firstName} ${userDetails.lastName}`), secondaryTitle && __jsx("p", {
      className: "headline"
    }, secondaryTitle)));
  }

}
UserInfo.defaultProps = {
  // userDetails: undefined,
  additionalSecondaryTitle: ''
};

/***/ }),

/***/ "35RN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Breadcrumbs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Bc+");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("S/If");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { Link } from 'react-router-dom';



class Breadcrumbs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onClick", link => {// link && this.props.push(link);
      // TODO: report GA
    });
  }

  render() {
    const {
      items
    } = this.props;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
      className: "breadcrumbs"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
      href: "/"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "home"
    }), __jsx("span", null, "\u05E8\u05D0\u05E9\u05D9")), items.map((item, index) => {
      const additionalProps = {};

      if (item.link) {
        additionalProps.onClick = () => {// this.props.push(item.link);
          // TODO: report GA
        };
      } else {
        additionalProps.className = 'disabled';
      }

      if (item.isHighlighted) {
        additionalProps.className = additionalProps.className ? `${additionalProps.className} highlighted` : 'highlighted';
      }

      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, _extends({}, additionalProps, {
        onClick: () => this.onClick(item.link),
        key: index
      }), !item.isHighlighted && item.placeObject && item.subCategoryObject && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_4__[/* buildSearchUrl */ "c"])({
          placeId: item.placeObject._id,
          subCategoryId: item.subCategoryObject._id
        })
      }, __jsx("a", null, item.title)), !item.isHighlighted && item.placeObject && !item.subCategoryObject && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_4__[/* buildPlaceUrl */ "b"])(item.placeObject)
      }, __jsx("a", null, item.title)), (item.isHighlighted || !item.placeObject && !item.subCategoryObject) && __jsx("span", null, item.title));
    }));
  }

}

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "5gvO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WDjL");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Content extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "content"
    }, this.props.children);
  }

}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o7B1");


/***/ }),

/***/ "A20i":
/***/ (function(module, exports) {



/***/ }),

/***/ "Cl4C":
/***/ (function(module, exports) {



/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "GY+C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardWrap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Uubo");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



class CardWrap extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      className
    } = this.props;
    return __jsx("div", _extends({}, this.props, {
      className: `card-wrap ${className || ''}`
    }), this.props.children);
  }

}

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kvkj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/components/FancyTitle/index.js
var FancyTitle = __webpack_require__("WOk/");

// EXTERNAL MODULE: ./src/components/Content/index.js
var Content = __webpack_require__("5gvO");

// EXTERNAL MODULE: ./src/components/Page/index.js
var Page = __webpack_require__("RXmK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/AppSpinner/index.scss
var components_AppSpinner = __webpack_require__("csoO");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./src/components/AppSpinner/index.js
var __jsx = external_react_default.a.createElement;



class AppSpinner_AppSpinner extends external_react_["Component"] {
  render() {
    return __jsx("div", {
      className: "app-spinner"
    }, __jsx("img", {
      src: "/static/img/logos/icon-blue.svg",
      className: "app-icon"
    }), __jsx(external_antd_["Icon"], {
      type: "loading",
      spin: true
    }));
  }

}
// EXTERNAL MODULE: ./src/components/CardWrap/index.js
var CardWrap = __webpack_require__("GY+C");

// EXTERNAL MODULE: ./src/components/UserInfo/index.js
var UserInfo = __webpack_require__("1T23");

// EXTERNAL MODULE: ./src/components/Breadcrumbs/index.js
var Breadcrumbs = __webpack_require__("35RN");

// CONCATENATED MODULE: ./src/components/index.js
/* concated harmony reexport FancyTitle */__webpack_require__.d(__webpack_exports__, "e", function() { return FancyTitle["a" /* default */]; });
/* concated harmony reexport Content */__webpack_require__.d(__webpack_exports__, "d", function() { return Content["a" /* default */]; });
/* concated harmony reexport Page */__webpack_require__.d(__webpack_exports__, "f", function() { return Page["a" /* default */]; });
/* concated harmony reexport AppSpinner */__webpack_require__.d(__webpack_exports__, "a", function() { return AppSpinner_AppSpinner; });
/* concated harmony reexport CardWrap */__webpack_require__.d(__webpack_exports__, "c", function() { return CardWrap["a" /* default */]; });
/* concated harmony reexport UserInfo */__webpack_require__.d(__webpack_exports__, "g", function() { return UserInfo["a" /* default */]; });
/* concated harmony reexport Breadcrumbs */__webpack_require__.d(__webpack_exports__, "b", function() { return Breadcrumbs["a" /* default */]; });








/***/ }),

/***/ "RXmK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xsKq");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  Content
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      className
    } = this.props;
    return __jsx(Content, {
      className: `page ${className || ''}`
    }, __jsx("div", {
      className: "header-opacity"
    }), this.props.children);
  }

}

/***/ }),

/***/ "S/If":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return buildPlaceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return buildSearchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildBusinessUrl; });
const buildPlaceUrl = place => {
  const {
    _id,
    friendlyUrl,
    heName,
    enName
  } = place;
  return `/place/${_id}/${friendlyUrl || heName || enName}`;
};
/**
 *
 * @param {placeId: string, subCategoryId: string} searchConfig
 */

const buildSearchUrl = searchConfig => {
  const {
    placeId,
    subCategoryId
  } = searchConfig;
  return `/search/${placeId}/${subCategoryId}`;
};
const buildBusinessUrl = business => {
  const {
    friendlyUrl,
    _id,
    englishName
  } = business;
  return `/business/${_id}/${friendlyUrl || englishName || ''}`;
};

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Uubo":
/***/ (function(module, exports) {



/***/ }),

/***/ "W7qB":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFDV0NBTUFBQUFMMzRIUUFBQUF0MUJNVkVWOTI5UjkyOVI5MjlTd2lIUjQ0dHl6Z20yRTFNeXdqSGgrMnRPd2lYVjgzZFowNmVXNGUyVzVlV094aFhHNmVHS3ZpbloyNk9PM2ZXaDM1TjUzNXVCNjRObTRlbU56NitaeTdlbDA2K1ovMmRLMGdHdWdwcGQ4MzlpaW9wTzdkVjYxZm1sMjUrS1h0YWk3ZDJDVHZMQ3VqbnkyZ0d1S3lzRzFnMjZGMGNpcWxvU0MxcytJenNXVXVhMmNyWit0a29CLzNOV1B3cmVhc2FOdDlmS2RxWnFsbm82bm1ZaDY1TjZOeGJ1UnY3Tjc0ZHl6aFhHbm00by9sczRrQUFBQUFuUlNUbFB4NU54VE82VUFBQVg0U1VSQlZIamE3ZHlIa3BwQUdNRHh5eTdvRnBaZVJCQkVyR2MzNTFudTN2KzVZaW96YWZDQkVHZkMvd2wrczZ6b2x2SHB3OU1EOXVFSlBXUlBEK2w2YWxrdDYyc3RDMUxMZ3RTeUlMVXNTQzBMVXN1QzFMSWd0U3hJTFF0U3k0TFVzdUF4eGxDVjdzNWlrczI1WWR1MjRYUExnZU5xWUJGbSsvWnlOaDV0d2pBOGpDNHJZbmdXSXFob3RiQ0k0NTFXbzJNM1VGemxjNjQ1bjBUcmpzRVpHRmFkbGFGNmcvSHJYRk5rRlg5UERWenRMVHFmaXNCcVlSSGtuZFlUVFZIeHo4bWE4bnptU1k2ckhsWmY2cDIzNlJEL0xvcGRjZXowd0FOV25VWDQ2VVVvTjhEdm8ybzZYZnRXSDBHcXppTGVjaHVyRlA4NVBZaWprd0Z5VldmMVZvR2crSzlSTmQ3dU9NQlZtVVY2SzFQUmNWNVV3MzJBcXlxTGVDdlQxSEYrdXNBN3dIT3N4dXJ6enJDUTZ1YlN0aWVMSUVDbFdjUWFkRjBkRjR2R1IrNEFYT1ZaakI5akhSY3VIdldhWUpIZU9NWEZvN0s1TUtBdU9JdFkvYmVBQWx5Nisyd1BVRlpObytXSEtjV2cwakh3TWNKWnhGaVpLa3hGaHhNbUlWRHcwZUtSUmpIUWxRSm5QWnhsTCtZcWhtWnVCdzRDQkdmNW01UmljR0xQQWNNRlp6bTd5UkN1b2xwa0lFQmdGdCtidUVReVhVSW1QWnoxb3VFeWlZdUhBQUZaYlBBOExNWFNRbzRBQVZuVzRrMHR4Um8rRHdCdmVpaUxYeFJjS2hsM0xIU3JIcFozME1xeDFPazVRYmRxWWJFa2RIRzV4TnBEcUM2VzlHcVdaQ2tqamxCZExLYzhLMHdZcW9ubFpPOEhNQ3V5NjJQdHRrRnBsdlhmc1I3eklWYWE4amZXZi9hQ3FQSTY5UkdxaVlYOGgvenlLZjlWcmVLRmhXNzlWejlzQm1YZkVPTGJ6OEJIKzlFOGhzeDRPR3V2UE9JU3c5bE5BcmlLaWg4THNzZGF2bDY4V3BldktGbE5WYkJxV1B0aW56M20xZ2d4WnZDTnBHNzlHMG5JajJJZDVvclh0Vys3SVdJdjUrQk5TZ2RsMWJhbHU0NWhXN29yWHQrV2J0YkFlRTloRytBSVVHa1dzUmwyaTdyMCtHZzBjMXlBQ085TWgwVVBWN29EdSs3RGxXeDZuVVdnRjFMUkNrZFI4SHA3WVJZNXVOTUJCNHJWV1lSNXMzbnVNU2VPSnp2SWg3RDZhQkhVNjB4eURvWGwrSGh0K2xBWUVlTWFhZ3FsZnh3cWJUcmlObGhWL2NLQjVaOG44WkQrSHFWbzc1MmUwK2lGZzJ5Q1hVZmRWUG4xVWFxdWVONGJCc2xUMVhlWlpiZCtudjU2bWVXNFAzbk5YMmJKSXBKM21oM2V1MU5GQ09FS29Tanp5WEcwU0RnQVZkTkZxY1NYbHVmeDV1VnpoOHVzYjNzV0FGVVBpem1TWlhpOWoxazlubGdTOU9KYmRWWUdzZ3h1WC91TDJYNjhQbXcyTDJFWXZtd09vL1ZsdGxnT0xNNXRDV2Fyem1KT3d1M2RZajhLMzdmMHpWU1VMMVBMRmJjVXhaemp5V3QwR00vNkZqY0F0SW9zWnZHa1B4dEZXOVVVcmhuSTZpL3ZCMVVlS3VMejVEL3NPNVlIT0VBSHN6S1RaeTNHMFdRcTNHSE9Va01ORkdIUzQyam0rRGFyYytWREhHNHMxMGNzM0VERnhaSVZiZjU4V0oyOCtoYjdrbmM5UjFnb01nYWxtdHI4ZGQwSERCbUVaZkgrZW1zS0djT2pxaUwwelNJeEdMa3ZpMGhlLzlEVlRFeHh5UUp0SHExNGdrZ1YxcS9mZlFlc0JiaEtWTldtMGNxM3lKMVlCSEY3M05XeU5Xc1YySVo0RHJrSGkwais2alVkWnFncU1EbkY0eVFoMVZuRXVHNU1GMmVxaXJCaCt0N3hHS25HSXF5MzJLYXlqdThXeFdJKzlpMVNoZFdYL1BIVXBmaXU2VUVhWFExU25rVU1LVW9ESGQ4NXFxYVQ3R1l4bUVVTTlwd3R1dTRLYytjemo1RlNMTUk3dW9iclNUZmRzYzlJQ1JieE82cExjVTNwZ1JqM0dBR3pDTys4dVRxdUxWMFduOGNMeUNMR1VsVmdLcmpyNGdGSGkxalhpUVpVd1orak11c1JDSXRJOXJ0R2NjM3A1bnpKK3dBVzh6Y3hyclBzSXJaRUNyT0lkeFlxeGZWSDQ5Qm5SVm5FWWwyVDRpWlN4WjZUZ2l6bWh6SEZqVVROTHBOSUlSYmgyYkZPN1ZGdDR4Y2JyWUgxNmxMY1ZQSjBZWk04RnZ6Z3QvcHdoYnpJYURFN0c2d21rdWNMdXdETG1BSFBWNnZQTHE4QWk0Y2F4VTBXZEltVXk1S1dYUmszbTNMaHVTeCtVWEN6VVJFbExJOWx2R2k0NFlKSjM4bGhaYmRvbWt1ZHp1d2NsclZTVmR4MFlzUnpXTWJleEkzbmhnbjdPNHVQRk54NDVxdVR3ekxDV0c0OHQwdWN2N0tZSFU2N2pmYzJXVXAvSHkyMjdQeUxTTTZVSjQ0bC9ZUFFyZi9yanhkYVZyRmFGcVNXQmFsbC9ZTWUvYzloRVhyUXYvajlCTHlWT0piVUxacmlBQUFBQUVsRlRrU3VRbUNDIg=="

/***/ }),

/***/ "WDjL":
/***/ (function(module, exports) {



/***/ }),

/***/ "WOk/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FancyTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Cl4C");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class FancyTitle extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      highlightedTitle,
      regularTitle
    } = this.props;
    return __jsx("div", {
      className: "fancy-title"
    }, __jsx("h1", null, regularTitle && __jsx("span", {
      className: "regular-title"
    }, regularTitle), highlightedTitle), __jsx("div", {
      className: "header-color"
    }));
  }

}
FancyTitle.defaultProps = {
  highlightedTitle: '',
  regularTitle: ''
};

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZdeI":
/***/ (function(module, exports) {



/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "csoO":
/***/ (function(module, exports) {



/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  true && (_cachedData = this.sdc[pathname]) ? Promise.resolve(_cachedData) : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o7B1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/PrivacyPolicy/index.scss
var components_PrivacyPolicy = __webpack_require__("A20i");

// EXTERNAL MODULE: ./src/components/index.js + 1 modules
var components = __webpack_require__("Kvkj");

// CONCATENATED MODULE: ./src/components/PrivacyPolicy/index.js
var __jsx = external_react_default.a.createElement;





class PrivacyPolicy_PrivacyPolicy extends external_react_["Component"] {
  render() {
    return __jsx(components["f" /* Page */], {
      className: "privacy-policy"
    }, __jsx(components["d" /* Content */], null, __jsx(components["e" /* FancyTitle */], {
      highlightedTitle: "Privacy Policy"
    }), __jsx("p", null, __jsx("b", null, " Last Updated on May 24, 2018."), " This Privacy Policy is effective immediately for users registering accounts after that date and will become effective on May 24, 2018 for pre-existing users.", ' '), __jsx("p", null, "The Mymapo.com website and related iOS and Android apps (the \u201CPlatform\u201D) and any current or future features, tools, apps, or websites offered through the Platform, are operated by Avartii Inc. (\u201CThe Company\u201D , \u201Cour\u201D, \u201Cwe\u201D , \u201Cus\u201D). We believe that the privacy and security of your information and data (\u201CInfo\u201D) is important. This Privacy Policy explains the type of Information we collect from users on the Platform and what control our users have over their Information. By using or accessing the Platform, you signify that you have read, understand and agree to be bound by this Policy. When you use the Platform, you consent to our collection, use, and disclosure of information about you as described in this Privacy Policy."), __jsx("ol", null, __jsx("li", null, __jsx("h2", null, "INFORMATION WE COLLECT AND HOW WE USE IT"), __jsx("p", null, "We may collect and store information about you when you use the Platform. We use this information to fulfill your requests, provide the Platform\u2019s functionality, improve the Platform\u2019s quality, personalize your experience, track usage of the Platform, provide feedback to third party businesses that are listed on the Platform, display relevant advertising, market the Platform, provide customer support, message you, back up our systems that allow for disaster recovery, enhance the security of the Platform, and comply with legal obligations."), __jsx("p", null, "There are two types of Information that may be collected through the Platform: A. Personal Information such as your name, email address, photos, geolocation information, and other information that can be used to directly identify you. B. Data Usage which is data related to your use of the Platform, anonymous information about the device used to access the Platform such as your device type and your device identifiers, and log data such as the date and time you visited, the browser or app version you used, the URLs you came from and go to."), __jsx("p", null, "If you want to create an account and use the platform features we may at that time require access to a certain Personal Information. When you submit Personal Information through the Platform, whether by directly providing it to us upon request, expressly allowing us to access it, or voluntarily disclosing it through comments or communications, you are giving your consent to the collection, storage, use and disclosure of your Personal Information as set in this Privacy Policy."), __jsx("p", null, "If you choose to connect with our Platform through a third-party social network such as Facebook, we may collect all Personal Information made available to us from your profile on such Social Network, such as your name, username, profile picture and email address. In addition, our Platform may offer social sharing features which will allow you to \u201CShare\u201D your activity on a Social Network. If you decide to use such features, it may allow the sharing and collection of Information both to and from such Social Network so you should check the privacy policy of each Social Network before using such features. If you would like more detail about what Information a Social Network is sharing with us, please go to the privacy policy of that Social Network."), __jsx("p", null, "If you choose to include Personal Information in your profile (such as your name or photo), that Information will be publicly-facing and, therefore, be visible to other users. In addition, any content you post or communications you send will obviously be available to the public or the intended recipient (as applicable) so if you do not want Personal Information made public or you do not want certain Personal Information shared by another user, do not include such Personal Information in your profile or any communications you may send or post."), __jsx("p", null, "If you choose to use our invite features to invite one of your contacts to join the Platform, we may access your device\u2019s phonebook or contact list, or your friends list on your applicable Social Network, to gather Information such as your friend\u2019s contact information in order to send the invite - but only if you have first given us your consent. You are responsible for getting your contacts\u2019 permission when you opt to give their contact details to us. Please note that we may also collect and use your Personal Information if one of your friends shares it with us in order to invite you to the Platform."), __jsx("p", null, "Whether or not you submit Personal Information, any time you visit or use our Platform, click on our advertisements (including those appearing on third party sites), or visit our social media pages, we or our Service Providers may collect, store or accumulate certain Usage Data based on your use of our Platform, such as your device ID or other persistent identifier, your IP address, data regarding your activities on the Platform, and the URLs you visited before and after using our Platform. For more information on how certain Usage Data is collected, please see the Cookies section below.")), __jsx("li", null, __jsx("h2", null, "COOKIES"), __jsx("p", null, "As part of our collection of data, and use of user data, we may use cookies, tracking pixels, or similar tracking technologies. Although cookies may record certain identifiers related to your electronic device, they do not contain any personal information. Cookies are small pieces of information stored on your hard drive by your browser that can then be used to gather usage data."), __jsx("p", null, "You may choose to prevent your browser from automatically accepting cookies, however please note that by not accepting cookies, certain features of the Platform may unavailable to you.")), __jsx("li", null, __jsx("h2", null, "THIRD PARTIES"), __jsx("p", null, "The Platform may contain links to third party websites to which we have no affiliation. This includes but is not limited to any form of advertising, content, reviews and recommendations found on these third party websites. Except as stated in this policy, we do not share your personal information with third parties. Furthermore, we are not responsible or liable for the privacy policies of any third party or their management of your personal information.", ' '), __jsx("p", null, "We do however allow advertisements or sponsored posts of third parties on our Platform. This allows us to keep the Platform free to our users. Please note though, that third party advertisements and sponsored posts may be served through third party ad servers or ad networks that use technology to send, directly to your browser, the content and links that appear on the Platform. This means that they may receive certain usage data which is then used in analytics. We encourage you to read the privacy policies of these third parties prior to submitting any personal information to them as they may treat your information differently than we do."), __jsx("p", null, "We may also personally use certain third party ad network service providers to serve advertisements on our behalf across the internet. These entities may use cookies to collect usage data and the information collected may then be used by us and others for various purposes such as but not limited to analytics, measuring effectiveness of ad campaigns, and to deliver content targeted to your interests.", ' '), __jsx("p", null, "Usage Data may be used in aggregate form for internal business purposes, such as optimizing the Platform, generating statistics and developing marketing plans. We may also use, share or transfer such aggregated, anonymized Usage Data with or to our affiliates, licensees, contractors and partners for administrative, analytical, research, optimization, security and other purposes, but no such information will be linked with your Personal Information or be used to identify or contact you."), __jsx("p", null, "Finally, we may share your Information: (i) In response to subpoenas, court orders, or other legal process, to establish or exercise our legal rights, to defend against legal claims, or as otherwise required by law, and in such cases we reserve the right to raise or waive any legal objection or right available to us; (ii) When we believe it is appropriate to investigate, prevent, or take action regarding illegal or suspected illegal activities, to protect and defend the rights, property, or safety of our company, our users, or others, and in connection with the enforcement of our Terms of Use and other agreements; or (iii) In connection with a corporate transaction, such as a divestiture, merger, consolidation, or asset sale, or in the unlikely event of bankruptcy.")), __jsx("li", null, __jsx("h2", null, "CONTROLLING YOUR PERSONAL DATA"), __jsx("p", null, "We use and store the Personal Information that we collect to authenticate your account, verify your address, process your requests, provide use of chat, comment or forum functionality, send you push notifications about the Platform or other communications you have opted into, provide geolocation functionality when approved by you, allow you to communicate with other users, inform you of relevant information or offers related to the Platform through promotional emails, provide you with support, facilitate invitations, and otherwise communicate with you. Please note that you may always unsubscribe from further emails in any promotional messages we send you."), __jsx("p", null, "We contract with companies or individuals to provide certain services including hosting services, software development, data management, surveys and marketing, and promotional services. We call them our \u201CService Providers.\u201D We may share both your Personal Information and Usage Data with Service Providers solely as appropriate for them to perform their services for us. They are prohibited from using your Personal Information for any other purposes.")), __jsx("li", null, __jsx("h2", null, "DATA RETENTION AND ACCOUNT TERMINATION"), __jsx("p", null, "You can close your account at any time. We will remove your public posts from view and/or dissociate them from your account profile, but we may retain information about you for the purposes authorized under this Privacy Policy unless prohibited by law. For example, we may retain information to prevent, investigate, or identify possible wrongdoing in connection with the Platform or to comply with legal obligations. Please note that businesses cannot remove their business listings, ratings, or reviews by closing their accounts.")), __jsx("li", null, __jsx("h2", null, "CHILDREN"), __jsx("p", null, "The Service is intended for general audiences and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information without parental consent, please contact us. If we become aware that a child under 13 has provided us with personal information without parental consent, we take steps to remove such information and terminate the child's account.")), __jsx("li", null, __jsx("h2", null, "SECURITY"), __jsx("p", null, "Although we take precautions to protect our users personal information, please remember that no method of transmission over the internet or via any device is 100% secure. While we strive to do our best to protect your personal information as it is at utmost importance to us, we cannot guarantee its absolute security. By signing up for the Platform, you acknowledge that we are not responsible for any intercepted information sent via the internet and you hereby release us from any and all claims regarding the use of intercepted information in any unauthorized manner. You also understand and agree that we are not liable in any way nor responsible for the acts, omissions or policies of our service providers or any other external sources with respect to your personal information. While we take all steps to govern our service providers use and protection of our user\u2019s personal information, you understand that we have no control over and not responsible for the privacy policies and practices of such parties.", ' '), __jsx("p", null, "If you believe your information is being improperly used by us or any third party or even other user, please notify us immediately via email at contact@mymapo.com .", ' ')), __jsx("li", null, __jsx("h2", null, "MODIFICATIONS TO THIS PRIVACY POLICY "), __jsx("p", null, "We reserve the right to change this policy in whole or in part at any time. In such event, the policy will be updated and you will be notified in the app or via email. Therefore, please review this policy from time to time to ensure that you are aware of any changes made. If you have any questions or concerns we welcome you to contact us at contact@mymapo.com and include \u201CRe: Privacy Policy\u201D in the subject line. In any event, your continued use of the Platform after such change constitutes your acceptance of any such changes in whole or in part. You may choose to discontinue your use of the Platform at any time if you do not accept changes made to our privacy policy.", ' ')))));
  }

}

/* harmony default export */ var src_components_PrivacyPolicy = (PrivacyPolicy_PrivacyPolicy);
// CONCATENATED MODULE: ./pages/privacy/index.js
var privacy_jsx = external_react_default.a.createElement;




class privacy_PrivacyPolicy extends external_react_["Component"] {
  getPageTitle() {
    return `Mapo | מדיניות הפרטיות`;
  }

  getMetaImage() {
    return '';
  }

  getMetaDescription() {
    return `הורידו את האפליקציה וגלו את ההמלצות על המקומות הכי חמים ברחבי העולם.`;
  }

  render() {
    return privacy_jsx("div", null, privacy_jsx(head_default.a, null, privacy_jsx("title", {
      key: "title"
    }, this.getPageTitle()), privacy_jsx("meta", {
      property: "description",
      key: "description",
      content: this.getMetaDescription()
    }), privacy_jsx("meta", {
      property: "og:title",
      key: "og:title",
      content: this.getPageTitle()
    }), privacy_jsx("meta", {
      property: "og:description",
      key: "og:description",
      content: this.getMetaDescription()
    })), privacy_jsx(src_components_PrivacyPolicy, null));
  }

}

/* harmony default export */ var privacy = __webpack_exports__["default"] = (privacy_PrivacyPolicy);

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xsKq":
/***/ (function(module, exports) {



/***/ })

/******/ });