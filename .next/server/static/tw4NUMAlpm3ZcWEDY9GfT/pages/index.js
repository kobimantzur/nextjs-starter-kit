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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/FfL":
/***/ (function(module, exports) {



/***/ }),

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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


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

/***/ "7koQ":
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "B6+W":
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),

/***/ "Cl4C":
/***/ (function(module, exports) {



/***/ }),

/***/ "DOcE":
/***/ (function(module, exports) {



/***/ }),

/***/ "E4SY":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FqKx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/containers/SearchPage/index.scss
var containers_SearchPage = __webpack_require__("fjoz");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "connected-react-router"
var external_connected_react_router_ = __webpack_require__("B6+W");

// EXTERNAL MODULE: ./src/reducers/Search/actions.js + 2 modules
var actions = __webpack_require__("HWjx");

// EXTERNAL MODULE: ./src/containers/SearchPage/Components/CountryPicker/index.scss
var Components_CountryPicker = __webpack_require__("oUJs");

// EXTERNAL MODULE: ./src/services/urlBuilderService.js
var urlBuilderService = __webpack_require__("S/If");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// EXTERNAL MODULE: ./src/services/commonService.js
var commonService = __webpack_require__("fFt1");

// CONCATENATED MODULE: ./src/containers/SearchPage/Components/CountryPicker/index.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class CountryPicker_CountryPicker extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onCountryClick", country => {
      const targetUrl = Object(urlBuilderService["b" /* buildPlaceUrl */])(country);
      this.props.push(targetUrl);
    });
  }

  renderCountry(country) {
    return __jsx(link_default.a, {
      href: Object(urlBuilderService["b" /* buildPlaceUrl */])(country),
      key: country._id
    }, __jsx("a", {
      className: "country"
    }, __jsx("div", {
      className: "country-title"
    }, country.heName), __jsx(external_react_lazyload_default.a, {
      height: Object(commonService["b" /* isMobile */])() ? 150 : 300
    }, __jsx("div", {
      className: "b-image",
      style: {
        backgroundImage: `url(${country.headerImage})`
      }
    }))));
  }

  render() {
    const {
      countriesList
    } = this.props;
    if (!countriesList) return null;
    return __jsx("div", {
      className: "country-picker"
    }, countriesList.map(country => this.renderCountry(country)));
  }

}
// EXTERNAL MODULE: ./src/containers/SearchPage/Components/SearchBar/index.js
var SearchBar = __webpack_require__("kybl");

// CONCATENATED MODULE: ./src/containers/SearchPage/Components/index.js


// EXTERNAL MODULE: ./src/components/index.js + 1 modules
var components = __webpack_require__("Kvkj");

// CONCATENATED MODULE: ./src/containers/SearchPage/index.js
var SearchPage_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









class SearchPage_SearchPage extends external_react_["Component"] {
  render() {
    const {
      isLoading
    } = this.props;
    return SearchPage_jsx(components["f" /* Page */], _extends({
      className: "search-page"
    }, this.props, {
      isLoading: true
    }), isLoading && SearchPage_jsx(components["a" /* AppSpinner */], null), SearchPage_jsx(components["d" /* Content */], null, !isLoading && SearchPage_jsx(external_react_default.a.Fragment, null, SearchPage_jsx(components["e" /* FancyTitle */], {
      highlightedTitle: "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC\u05DE\u05D0\u05E4\u05D5"
    }), SearchPage_jsx(CountryPicker_CountryPicker, this.props))));
  }

}

const mapStateToProps = ({
  SearchReducer
}) => {
  const {
    isLoading,
    countriesList
  } = SearchReducer;
  return {
    isLoading,
    countriesList
  };
};

const mapDispatchToProps = {
  getCountries: actions["a" /* getCountries */],
  push: external_connected_react_router_["push"]
};
/* harmony default export */ var src_containers_SearchPage = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(SearchPage_SearchPage));

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

/***/ "HWjx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "connected-react-router"
var external_connected_react_router_ = __webpack_require__("B6+W");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__("X7BR");

// EXTERNAL MODULE: ./src/services/commonService.js
var commonService = __webpack_require__("fFt1");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// CONCATENATED MODULE: ./src/services/notificationService.js

const showErrorToast = errorMessage => {
  external_react_toastify_["toast"].error(errorMessage);
};
const showSuccessToast = msg => {
  external_react_toastify_["toast"].success(msg);
};
// CONCATENATED MODULE: ./src/services/requestService.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Axios = external_axios_default.a.create();
Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const postRequest = (relativeUrl, params = {}, headers = {}) => {
  const requestUrl = `${constants["a" /* BASE_API */]}${relativeUrl}`;
  return Axios.post(requestUrl, params, {
    headers: _objectSpread({}, headers)
  });
};
const getRequest = (relativeUrl, params = {}, headers = {}) => {
  const requestUrl = `${constants["a" /* BASE_API */]}${relativeUrl}`;
  return Axios.get(requestUrl, {
    params,
    headers: _objectSpread({}, headers, {
      'Content-Type': 'application/json'
    }),
    mode: 'cors'
  });
};
// EXTERNAL MODULE: ./src/reducers/Search/types.js
var types = __webpack_require__("i3V0");

// EXTERNAL MODULE: ./src/services/urlBuilderService.js
var urlBuilderService = __webpack_require__("S/If");

// CONCATENATED MODULE: ./src/reducers/Search/actions.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPlaceDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setSearchModalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return searchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return navigateSearchBySubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return searchBySubCategory; });
function actions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function actions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { actions_ownKeys(Object(source), true).forEach(function (key) { actions_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { actions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function actions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getCountries = () => async dispatch => {
  const res = await getRequest('/placements/getPlacementsData');

  const payload = actions_objectSpread({
    isLoading: false
  }, res.data);

  dispatch({
    type: types["c" /* SET_COUNTRIES */],
    payload
  });
  return payload;
};
const getPlaceDetails = placeId => async dispatch => {
  const res = await getRequest(`/placements/getPlaceDetails?placeId=${placeId}`);
  dispatch({
    type: types["e" /* SET_PLACE_DETAILS */],
    payload: actions_objectSpread({
      isLoading: false
    }, res.data)
  });
};
function setSearchModalState(isSearchOpen) {
  return {
    type: types["d" /* SET_MODAL_STATE */],
    payload: {
      isSearchOpen
    }
  };
}
const searchQuery = (query = '') => async dispatch => {
  const firstPayload = {
    isSearchLoading: true,
    query
  };

  if (!query) {
    firstPayload.autocompleteList = [];
    firstPayload.isSearchLoading = false;
  }

  dispatch({
    type: types["a" /* SEARCH_QUERY */],
    payload: firstPayload
  });

  if (query) {
    const res = await getRequest(`webSearch/searchByQuery?query=${query}`);
    dispatch({
      type: types["a" /* SEARCH_QUERY */],
      payload: {
        autocompleteList: res.data,
        isSearchLoading: false
      }
    });
  }
};
const navigateSearchBySubCategory = (selectedPlace, subCategory) => async dispatch => {
  const targetUrl = Object(urlBuilderService["c" /* buildSearchUrl */])({
    placeId: selectedPlace._id,
    subCategoryId: subCategory._id
  });
  dispatch(Object(external_connected_react_router_["push"])(targetUrl));
  dispatch({
    type: types["b" /* SEARCH_SUB_CATEGORY */],
    payload: {
      isLoading: true,
      selectedSubCategory: subCategory
    }
  });
};
const searchBySubCategory = (placeId, subCategoryId) => async dispatch => {
  dispatch({
    type: types["b" /* SEARCH_SUB_CATEGORY */],
    payload: {
      isLoading: true
    }
  });
  const res = await getRequest(`webSearch/searchBySubCategory?placeId=${placeId}&subCategoryId=${subCategoryId}`);

  const payload = actions_objectSpread({
    isLoading: false
  }, res.data);

  dispatch({
    type: types["b" /* SEARCH_SUB_CATEGORY */],
    payload
  });
  return payload;
};

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

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/containers/SearchPage/index.js + 2 modules
var SearchPage = __webpack_require__("FqKx");

// EXTERNAL MODULE: ./src/reducers/Search/actions.js + 2 modules
var actions = __webpack_require__("HWjx");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/components/index.js + 1 modules
var components = __webpack_require__("Kvkj");

// EXTERNAL MODULE: ./src/components/Section/index.scss
var components_Section = __webpack_require__("n4gV");

// CONCATENATED MODULE: ./src/components/Section/index.js
var __jsx = external_react_default.a.createElement;


class Section_Section extends external_react_["Component"] {
  render() {
    const {
      className
    } = this.props;
    return __jsx("div", {
      className: `section ${className || ''}`
    }, this.props.children);
  }

}
// EXTERNAL MODULE: ./src/components/About/Components/AppPreviewSection/index.scss
var Components_AppPreviewSection = __webpack_require__("/FfL");

// CONCATENATED MODULE: ./src/components/About/Components/AppPreviewSection/index.js
var AppPreviewSection_jsx = external_react_default.a.createElement;



class AppPreviewSection_AppPreviewSection extends external_react_["Component"] {
  render() {
    return AppPreviewSection_jsx(Section_Section, {
      className: "app-preview-section"
    }, AppPreviewSection_jsx("div", {
      className: "right"
    }, AppPreviewSection_jsx("img", {
      src: "/static/img/logos/logo-blue.svg"
    }), AppPreviewSection_jsx("h1", null, "\u05DE\u05D8\u05D9\u05D9\u05DC\u05D9\u05DD \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD."), AppPreviewSection_jsx("h2", null, "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05DC\u05D9\u05E9\u05E8\u05D0\u05DC\u05D9\u05DD \u05D1\u05D7\u05D5\u05F4\u05DC")), AppPreviewSection_jsx("div", {
      className: "left"
    }, AppPreviewSection_jsx("img", {
      src: "/static/img/about/section-1.png"
    })));
  }

}
// EXTERNAL MODULE: ./src/components/About/Components/BulletsSection/index.scss
var Components_BulletsSection = __webpack_require__("gq3N");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// CONCATENATED MODULE: ./src/components/About/Components/BulletsSection/index.js
var BulletsSection_jsx = external_react_default.a.createElement;





class BulletsSection_BulletsSection extends external_react_["Component"] {
  render() {
    return BulletsSection_jsx(Section_Section, {
      className: "bullets-section"
    }, BulletsSection_jsx("h2", null, "\u05DE\u05D4 \u05EA\u05DE\u05E6\u05D0\u05D5 \u05D1Mapo?"), BulletsSection_jsx("p", null, "\u05D1\u05EA\u05D5\u05E8 \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9 \u05D1\u05DE\u05D3\u05D9\u05E0\u05D4 \u05D6\u05E8\u05D4 \u05D0\u05EA\u05D4 \u05DE\u05D7\u05E4\u05E9 \u05D0\u05EA \u05D4\u05E9\u05E4\u05D4 \u05E9\u05DC\u05DA \u05D5\u05D0\u05EA\u05D4 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05DB\u05DC \u05D4\u05D3\u05D1\u05E8\u05D9\u05DD \u05D4\u05E9\u05D5\u05D5\u05D9\u05DD \u05E1\u05D1\u05D9\u05D1\u05DA. MaPo \u05DE\u05D2\u05D9\u05E9\u05D4 \u05DC\u05DA \u05D4\u05DB\u05DC \u05D1\u05DE\u05E7\u05D5\u05DD \u05D0\u05D7\u05D3, \u05E2\u05DD \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05DE\u05D9\u05E9\u05E8\u05D0\u05DC\u05D9\u05DD \u05DB\u05DE\u05D5\u05DA."), BulletsSection_jsx("ul", null, BulletsSection_jsx("li", null, BulletsSection_jsx("div", {
      className: "icon"
    }, BulletsSection_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faHiking"]
    })), BulletsSection_jsx("strong", null, "\u05D0\u05D8\u05E8\u05E7\u05E6\u05D9\u05D5\u05EA"), BulletsSection_jsx("p", null, "\u05DB\u05DC \u05D4\u05D0\u05D8\u05E8\u05E7\u05E6\u05D9\u05D5\u05EA \u05D4\u05D7\u05DE\u05D5\u05EA \u05E0\u05DE\u05E6\u05D0\u05D5\u05EA \u05D1MaPo: \u05D0\u05EA\u05E8\u05D9 \u05EA\u05D9\u05D9\u05E8\u05D5\u05EA, \u05DE\u05E1\u05DC\u05D5\u05DC\u05D9\u05DD, \u05E4\u05D0\u05E8\u05E7\u05D9\u05DD \u05D5\u05E2\u05D5\u05D3.. ")), BulletsSection_jsx("li", null, BulletsSection_jsx("div", {
      className: "icon"
    }, BulletsSection_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faCocktail"]
    })), BulletsSection_jsx("strong", null, "\u05D1\u05D9\u05DC\u05D5\u05D9\u05D9\u05DD"), BulletsSection_jsx("p", null, "\u05D1\u05E8\u05D9\u05DD, \u05D4\u05D5\u05E4\u05E2\u05D5\u05EA, \u05D5\u05DE\u05D5\u05E2\u05D3\u05D5\u05E0\u05D9\u05DD \u05D4\u05DD \u05E8\u05E7 \u05D7\u05DC\u05E7 \u05DE\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D4\u05D1\u05D9\u05DC\u05D5\u05D9 \u05E9\u05EA\u05DE\u05E6\u05D0\u05D5 \u05D1MaPo.")), BulletsSection_jsx("li", null, BulletsSection_jsx("div", {
      className: "icon"
    }, BulletsSection_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faUtensilSpoon"]
    })), BulletsSection_jsx("strong", null, "\u05DE\u05E1\u05E2\u05D3\u05D5\u05EA"), BulletsSection_jsx("p", null, "\u05DB\u05DC \u05D4\u05DE\u05E1\u05E2\u05D3\u05D5\u05EA \u05D5\u05D3\u05D5\u05DB\u05E0\u05D9 \u05D4\u05DE\u05D6\u05D5\u05DF \u05D4\u05DB\u05D9 \u05D8\u05E2\u05D9\u05DE\u05D9\u05DD \u05D1\u05DE\u05E7\u05D5\u05DD \u05D0\u05D7\u05D3, \u05D1\u05D9\u05D7\u05D3 \u05E2\u05DD \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05DE\u05D9\u05E9\u05E8\u05D0\u05DC\u05D9\u05DD \u05E9\u05D9\u05D7\u05E1\u05DB\u05D5 \u05DC\u05DA \u05D6\u05DE\u05DF \u05D5\u05E7\u05DC\u05E7\u05D5\u05DC\u05D9 \u05E7\u05D9\u05D1\u05D4.")), BulletsSection_jsx("li", null, BulletsSection_jsx("div", {
      className: "icon"
    }, BulletsSection_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faHome"]
    })), BulletsSection_jsx("strong", null, "\u05DC\u05D9\u05E0\u05D4"), BulletsSection_jsx("p", null, "\u05DE\u05DC\u05D5\u05E0\u05D5\u05EA , \u05D3\u05D9\u05E8\u05D5\u05EA , \u05D0\u05DB\u05E1\u05E0\u05D9\u05D5\u05EA , \u05D5\u05D0\u05E4\u05D9\u05DC\u05D5 \u05D2\u05E1\u05D8\u05D4\u05D0\u05D5\u05E1\u05D9\u05DD, \u05E2\u05D5\u05DE\u05D3\u05D9\u05DD \u05DC\u05E8\u05E9\u05D5\u05EA\u05DB\u05DD \u05E2\u05DD \u05DB\u05DC \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05E9\u05D0\u05EA\u05DD \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD."))));
  }

}
// EXTERNAL MODULE: ./src/components/About/index.scss
var components_About = __webpack_require__("pi/D");

// EXTERNAL MODULE: ./src/components/About/Components/SingleImageSection/index.scss
var Components_SingleImageSection = __webpack_require__("DOcE");

// CONCATENATED MODULE: ./src/components/About/Components/SingleImageSection/index.js
var SingleImageSection_jsx = external_react_default.a.createElement;





class SingleImageSection_SingleImageSection extends external_react_["Component"] {
  render() {
    return SingleImageSection_jsx(Section_Section, {
      className: "single-image-section"
    }, SingleImageSection_jsx("div", {
      className: "right"
    }, SingleImageSection_jsx("h2", null, "\u05DB\u05DC \u05DE\u05D4 \u05E9\u05D0\u05EA\u05DD \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD"), SingleImageSection_jsx("p", null, "\u05D2\u05DC\u05D5 \u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05DE\u05D2\u05E0\u05D9\u05D1\u05D9\u05DD \u05D5\u05E2\u05E1\u05E7\u05D9\u05DD \u05D0\u05DE\u05D9\u05E0\u05D9\u05DD \u05D5\u05E7\u05E8\u05D0\u05D5 \u05DE\u05D4 \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9\u05DD \u05D7\u05E9\u05D1\u05D5 \u05E2\u05DC\u05D9\u05D4\u05DD. \u05E0\u05D5\u05D5\u05D8\u05D5 \u05DC\u05DE\u05E7\u05D5\u05DD, \u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8, \u05D5\u05E7\u05D1\u05DC\u05D5 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D7\u05E9\u05D5\u05D1\u05D9\u05DD \u05D1\u05DE\u05E7\u05D5\u05DD \u05D0\u05D7\u05D3.")), SingleImageSection_jsx("div", {
      className: "left"
    }, SingleImageSection_jsx("img", {
      src: "/static/img/about/all-you-need-section.png"
    })));
  }

}
// EXTERNAL MODULE: ./src/components/About/Components/GetTheAppSection/index.scss
var Components_GetTheAppSection = __webpack_require__("l8xx");

// CONCATENATED MODULE: ./src/components/About/Components/GetTheAppSection/index.js
var GetTheAppSection_jsx = external_react_default.a.createElement;



class GetTheAppSection_GetTheAppSection extends external_react_["Component"] {
  render() {
    return GetTheAppSection_jsx(Section_Section, {
      className: "get-the-app-section"
    }, GetTheAppSection_jsx("div", {
      className: "right"
    }, GetTheAppSection_jsx("h2", null, "\u05D4\u05E6\u05D8\u05E8\u05E4\u05D5 \u05E2\u05DB\u05E9\u05D9\u05D5"), GetTheAppSection_jsx("p", null, "\u05D2\u05DC\u05D5 \u05D0\u05EA \u05D4\u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05E9\u05D9\u05D4\u05E4\u05DB\u05D5 \u05D0\u05EA \u05D4\u05D8\u05D9\u05D5\u05DC \u05D4\u05D1\u05D0 \u05E9\u05DC\u05DB\u05DD \u05DC\u05D1\u05DC\u05EA\u05D9 \u05E0\u05E9\u05DB\u05D7")), GetTheAppSection_jsx("div", {
      className: "left"
    }, GetTheAppSection_jsx("a", {
      href: "https://itunes.apple.com/us/app/avartii-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%9D-%D7%91%D7%9C%D7%95%D7%A1-%D7%90%D7%A0%D7%92-%D7%9C%D7%A1/id1329505993?mt=8"
    }, GetTheAppSection_jsx("img", {
      className: "app-store",
      src: "/static/img/download/app-store-download.svg"
    })), GetTheAppSection_jsx("a", {
      href: "https://play.google.com/store/apps/details?id=com.avartii.app"
    }, GetTheAppSection_jsx("img", {
      className: "play-store",
      src: "/static/img/download/google-play-download.svg"
    }))));
  }

}
// CONCATENATED MODULE: ./src/components/About/index.js
var About_jsx = external_react_default.a.createElement;







class About_About extends external_react_["Component"] {
  render() {
    return About_jsx(components["f" /* Page */], {
      className: "about-page"
    }, About_jsx(components["d" /* Content */], null, About_jsx(AppPreviewSection_AppPreviewSection, null), About_jsx(BulletsSection_BulletsSection, null), About_jsx(GetTheAppSection_GetTheAppSection, null)));
  }

}
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;







class pages_Page extends external_react_["Component"] {
  render() {
    return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", {
      key: "title"
    }, "Mapo | \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9\u05DD \u05DE\u05D8\u05D9\u05D9\u05DC\u05D9\u05DD \u05D1\u05D7\u05D5\u05F4\u05DC")), pages_jsx(About_About, null));
  }

}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(state => state)(pages_Page));

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

/***/ "X7BR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_API; });
/* unused harmony export PALETTE_GRAY */
/* unused harmony export PALETTE_PRIMARY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GOOGLE_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_PAGE_TITLE; });
const BASE_API = true ? `https://api.mymapo.com/api/` : undefined; // export const BASE_API = 'http://localhost:2000/api/';

const PALETTE_GRAY = '#424242';
const PALETTE_PRIMARY = '#5e97c7';
const GOOGLE_API_KEY = 'AIzaSyAmkvMrCjGlSfdJppOEl4f5tyAqpmsmNv0';
const DEFAULT_PAGE_TITLE = 'Mapo | ישראלים מטיילים בחו״ל';

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

/***/ "fFt1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isMobile; });
/* unused harmony export setCookie */
/* unused harmony export getCookie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFriendlyTime; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const isMobile = () => {
  try {
    if (!navigator) return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
};
const setCookie = (name, value, days) => {
  let expires = '';

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }

  document.cookie = `${name}=${value || ''}${expires}; path=/`;
};
const getCookie = name => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == ' ') c = c.substring(1, c.length);

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
};
const getFriendlyTime = date => {
  if (!date) {
    return '';
  }

  const parsedDate = new Date(JSON.parse(JSON.stringify(new Date(date))));
  const delta = Math.round((+new Date() - parsedDate) / 1000);
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  let fuzzy;

  if (delta < 30) {
    fuzzy = 'הרגע';
  } else if (delta < minute) {
    fuzzy = `לפני ${delta} שניות`;
  } else if (delta < 2 * minute) {
    fuzzy = 'לפני כדקה';
  } else if (delta < hour) {
    fuzzy = `לפני ${Math.floor(delta / minute)} דקות`;
  } else if (Math.floor(delta / hour) === 1) {
    fuzzy = 'לפני כשעה';
  } else if (delta < day) {
    fuzzy = `לפני ${Math.floor(delta / hour)} שעות`;
  } else if (delta < day * 2) {
    fuzzy = 'אתמול';
  } else {
    fuzzy = moment__WEBPACK_IMPORTED_MODULE_0___default()(parsedDate).format('DD/MM/YYYY');
  }

  return fuzzy;
};

/***/ }),

/***/ "fjoz":
/***/ (function(module, exports) {



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

/***/ "gq3N":
/***/ (function(module, exports) {



/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "i3V0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_COUNTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_PLACE_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_MODAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEARCH_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SEARCH_SUB_CATEGORY; });
const SET_COUNTRIES = 'SET_COUNTRIES';
const SET_PLACE_DETAILS = 'SET_PLACE_DETAILS';
const SET_MODAL_STATE = 'SET_MODAL_STATE';
const SEARCH_QUERY = 'SEARCH_QUERY';
const SEARCH_SUB_CATEGORY = 'SEARCH_SUB_CATEGORY';

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

/***/ "kybl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7koQ");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);



const {
  Search
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];
class SearchBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      isOpen
    } = this.props;
    return null;
  }

}

/***/ }),

/***/ "l8xx":
/***/ (function(module, exports) {



/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "n4gV":
/***/ (function(module, exports) {



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

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "oUJs":
/***/ (function(module, exports) {



/***/ }),

/***/ "pi/D":
/***/ (function(module, exports) {



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

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xsKq":
/***/ (function(module, exports) {



/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });