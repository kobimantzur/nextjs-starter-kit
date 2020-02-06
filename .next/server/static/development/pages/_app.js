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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/dist/antd.min.css":
/*!*********************************************!*\
  !*** ./node_modules/antd/dist/antd.min.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/reducers */ "./src/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// pages/_app.js







const composeEnhancer = redux__WEBPACK_IMPORTED_MODULE_1__["compose"];

 // import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */

const makeStore = (initialState, options) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(Object(_src_reducers__WEBPACK_IMPORTED_MODULE_5__["default"])(), initialState, composeEnhancer(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_6___default.a)));
};

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    // we can dispatch from here too
    ctx.store.dispatch({
      type: 'FOO',
      payload: 'foo'
    });
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(makeStore)(MyApp));

/***/ }),

/***/ "./src/components/Layout/Components/AppFooter/index.js":
/*!*************************************************************!*\
  !*** ./src/components/Layout/Components/AppFooter/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Layout/Components/AppFooter/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/components/Layout/Components/AppFooter/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];
const propTypes = {};
const defaultProps = {};
class AppFooter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(Footer, {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Copyright \xA9 2018 Mapo. All rights reserved |", ' ', __jsx("a", {
      href: "mailto:contact@mymapo.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "contact@mymapo.com")));
  }

}
AppFooter.propTypes = propTypes;
AppFooter.defaultProps = defaultProps;

/***/ }),

/***/ "./src/components/Layout/Components/AppFooter/styles.scss":
/*!****************************************************************!*\
  !*** ./src/components/Layout/Components/AppFooter/styles.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Layout/Components/AppHeader/index.js":
/*!*************************************************************!*\
  !*** ./src/components/Layout/Components/AppHeader/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_apple_app_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../img/apple-app.png */ "./src/img/apple-app.png");
/* harmony import */ var _img_apple_app_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_apple_app_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_google_app_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../img/google-app.png */ "./src/img/google-app.png");
/* harmony import */ var _img_google_app_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_google_app_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_SearchPage_Components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../containers/SearchPage/Components/SearchBar */ "./src/containers/SearchPage/Components/SearchBar/index.js");
/* harmony import */ var _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../reducers/Search/actions */ "./src/reducers/Search/actions.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./src/components/Layout/Components/AppHeader/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_commonService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/commonService */ "./src/services/commonService.js");
var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/components/Layout/Components/AppHeader/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const PLACEHOLDER_TEXT = 'חפשו במאפו';
const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"];

class AppHeader extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let activeClass = '';

      if (window.scrollY > this.vw(15)) {
        activeClass = 'scrolled';
      }

      this.setState({
        activeClass
      });
    });
  }

  vw(v) {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return v * w / 100;
  }

  render() {
    const {
      isFocused,
      activeClass
    } = this.state;
    const {
      isLoading,
      selectedPlace,
      selectedSubCategory
    } = this.props;
    const searchTerm = selectedPlace && selectedSubCategory ? `${selectedSubCategory.title} ב${selectedPlace.heName}` : '';
    return __jsx(Header, {
      className: `header ${isFocused ? 'on-focus' : ''} ${activeClass}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("div", {
      className: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("img", {
      alt: "Mapo",
      className: "logo",
      src: '/static/img/logo-white.png',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), !isLoading && __jsx("div", {
      className: "search-bar-preview",
      onClick: () => this.props.setSearchModalState(true),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, !Object(_services_commonService__WEBPACK_IMPORTED_MODULE_8__["isMobile"])() && __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, searchTerm || PLACEHOLDER_TEXT), __jsx("i", {
      className: "fa fa-search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }))), Object(_services_commonService__WEBPACK_IMPORTED_MODULE_8__["isMobile"])() && __jsx("div", {
      className: "store-icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("a", {
      target: "_blank",
      rel: "noopener noreferer",
      href: "https://itunes.apple.com/us/app/avartii-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%9D-%D7%91%D7%9C%D7%95%D7%A1-%D7%90%D7%A0%D7%92-%D7%9C%D7%A1/id1329505993?mt=8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("img", {
      className: "appstore",
      alt: "AppStore",
      src: _img_apple_app_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), __jsx("a", {
      target: "_blank",
      href: "https://play.google.com/store/apps/details?id=com.avartii.app",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("img", {
      className: "google",
      alt: "Google Play Store",
      src: _img_google_app_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }))));
  }

}

const mapStateToProps = ({
  SearchReducer
}) => {
  const {
    selectedPlace,
    selectedSubCategory,
    isLoading
  } = SearchReducer;
  return {
    isLoading,
    selectedPlace,
    selectedSubCategory
  };
};

const mapDispatchToProps = {
  setSearchModalState: _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_6__["setSearchModalState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AppHeader));

/***/ }),

/***/ "./src/components/Layout/Components/AppHeader/index.scss":
/*!***************************************************************!*\
  !*** ./src/components/Layout/Components/AppHeader/index.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_AppHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/AppHeader */ "./src/components/Layout/Components/AppHeader/index.js");
/* harmony import */ var _Components_AppFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/AppFooter */ "./src/components/Layout/Components/AppFooter/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/components/Layout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_analyticsService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/analyticsService */ "./src/services/analyticsService.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/dist/antd.min.css */ "./node_modules/antd/dist/antd.min.css");
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _containers_SearchPage_Components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../containers/SearchPage/Components/SearchBar */ "./src/containers/SearchPage/Components/SearchBar/index.js");
/* harmony import */ var _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers/Search/actions */ "./src/reducers/Search/actions.js");
/* harmony import */ var _containers_shared_SearchModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../containers/shared/SearchModal */ "./src/containers/shared/SearchModal/index.js");
var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/components/Layout/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const propTypes = {};
const defaultProps = {};

class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Object(_services_analyticsService__WEBPACK_IMPORTED_MODULE_6__["initAnalytics"])();
  }

  render() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("style", {
      dangerouslySetInnerHTML: {
        __html: antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_8___default.a
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("style", {
      dangerouslySetInnerHTML: {
        __html: _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_7___default.a
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx(_Components_AppHeader__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), this.props.children, __jsx(_Components_AppFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx(_containers_shared_SearchModal__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })));
  }

}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Layout/index.scss":
/*!******************************************!*\
  !*** ./src/components/Layout/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: BASE_API, PALETTE_GRAY, PALETTE_PRIMARY, GOOGLE_API_KEY, DEFAULT_PAGE_TITLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_API", function() { return BASE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PALETTE_GRAY", function() { return PALETTE_GRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PALETTE_PRIMARY", function() { return PALETTE_PRIMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_API_KEY", function() { return GOOGLE_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGE_TITLE", function() { return DEFAULT_PAGE_TITLE; });
const BASE_API = false ? undefined : 'http://localhost:2000/api/'; // export const BASE_API = 'http://localhost:2000/api/';

const PALETTE_GRAY = '#424242';
const PALETTE_PRIMARY = '#5e97c7';
const GOOGLE_API_KEY = 'AIzaSyAmkvMrCjGlSfdJppOEl4f5tyAqpmsmNv0';
const DEFAULT_PAGE_TITLE = 'Mapo | ישראלים מטיילים בחו״ל';

/***/ }),

/***/ "./src/containers/SearchPage/Components/SearchBar/index.js":
/*!*****************************************************************!*\
  !*** ./src/containers/SearchPage/Components/SearchBar/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "react-modal");
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

/***/ "./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.js":
/*!***********************************************************************************!*\
  !*** ./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutocompleteOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/urlBuilderService */ "./src/services/urlBuilderService.js");
var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/containers/shared/SearchModal/Components/AutocompleteOptions/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class AutocompleteOptions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onPlaceClick", place => {
      const targetUrl = Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_2__["buildPlaceUrl"])(place);
      this.props.setSearchModalState(false);
      this.props.push(targetUrl);
    });
  }

  getBoldedText(pattern, text) {
    if (!text) return '';
    if (!pattern) return text;
    const updatedText = text.replace(pattern, `<strong>${pattern}</strong>`);
    return updatedText;
  }

  renderPlacements(placementsList) {
    const {
      query
    } = this.props;
    if (!placementsList) return null;
    return __jsx("div", {
      className: "placements-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, placementsList.map(placement => {
      const placementText = `${placement.heName} ${placement.country ? `, ${placement.country.heName}` : ''}`;
      return __jsx("div", {
        className: "placement",
        key: placement._id,
        onClick: () => this.onPlaceClick(placement),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-map-marker-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("span", {
        className: "name",
        dangerouslySetInnerHTML: {
          __html: this.getBoldedText(query, placementText)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }));
    }));
  }

  render() {
    const {
      autocompleteList
    } = this.props;
    if (!autocompleteList) return null;
    const {
      placementsList
    } = autocompleteList;
    return __jsx("div", {
      className: "autocomplete-options",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, this.renderPlacements(placementsList));
  }

}

/***/ }),

/***/ "./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.scss":
/*!*************************************************************************************!*\
  !*** ./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/containers/shared/SearchModal/Components/SearchBar/index.js":
/*!*************************************************************************!*\
  !*** ./src/containers/shared/SearchModal/Components/SearchBar/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/containers/shared/SearchModal/Components/SearchBar/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/containers/shared/SearchModal/Components/SearchBar/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Search
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];
class SearchBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSearch", e => {
      const query = e.target.value;
      this.props.searchQuery(query);
    });

    this.inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.state = {
      isSearchOpen: false
    };
  }

  componentDidMount() {
    this.setState({
      isSearchOpen: this.props.isSearchOpen
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      isSearchOpen
    } = this.props;

    if (isSearchOpen && !prevState.isSearchOpen) {
      this.inputRef.focus();
    }
  }

  render() {
    const {
      isSearchLoading
    } = this.props;
    return __jsx("div", {
      className: "search-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, isSearchLoading && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "loading",
      style: {
        fontSize: 24
      },
      spin: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx(Search, {
      ref: r => this.inputRef = r,
      prefixCls: "search-input",
      placeholder: "\u05D7\u05E4\u05E9\u05D5 \u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D0\u05D5 \u05E2\u05E8\u05D9\u05DD",
      onChange: e => this.onSearch(e),
      enterButton: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/containers/shared/SearchModal/Components/SearchBar/index.scss":
/*!***************************************************************************!*\
  !*** ./src/containers/shared/SearchModal/Components/SearchBar/index.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/containers/shared/SearchModal/index.js":
/*!****************************************************!*\
  !*** ./src/containers/shared/SearchModal/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reducers/Search/actions */ "./src/reducers/Search/actions.js");
/* harmony import */ var _Components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/SearchBar */ "./src/containers/shared/SearchModal/Components/SearchBar/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/containers/shared/SearchModal/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_AutocompleteOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/AutocompleteOptions */ "./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.js");
var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/containers/shared/SearchModal/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








 // Modal.setAppElement('#react-root');

react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement('#__next');

class SearchModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      isSearchOpen
    } = this.props;
    return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "searchModal",
      isOpen: isSearchOpen,
      onRequestClose: () => this.props.setSearchModalState(false),
      contentLabel: "Example Modal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(_Components_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })), __jsx(_Components_AutocompleteOptions__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })));
  }

}

const mapStateToProps = ({
  SearchReducer
}) => {
  const {
    isSearchOpen,
    isSearchLoading,
    autocompleteList,
    query
  } = SearchReducer;
  return {
    isSearchOpen,
    isSearchLoading,
    autocompleteList,
    query
  };
};

const mapDispatchToProps = {
  setSearchModalState: _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_4__["setSearchModalState"],
  searchQuery: _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_4__["searchQuery"],
  push: connected_react_router__WEBPACK_IMPORTED_MODULE_2__["push"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(SearchModal));

/***/ }),

/***/ "./src/containers/shared/SearchModal/index.scss":
/*!******************************************************!*\
  !*** ./src/containers/shared/SearchModal/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/img/apple-app.png":
/*!*******************************!*\
  !*** ./src/img/apple-app.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/apple-app-1e82320299f2a47d929fa5a925a02753.png";

/***/ }),

/***/ "./src/img/google-app.png":
/*!********************************!*\
  !*** ./src/img/google-app.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/google-app-e85f96de3c6d1dca5358c9f068b58dbe.png";

/***/ }),

/***/ "./src/reducers/BusinessPage/constants.js":
/*!************************************************!*\
  !*** ./src/reducers/BusinessPage/constants.js ***!
  \************************************************/
/*! exports provided: GET_BY_FRIENDLY_URL, SUBMIT_BUSINESS_REVIEW_URL, SET_BUSINESS, SET_EMPTY_STATE, SET_REVIEWS, SET_REVIEW_MODAL_STATE, SET_REVIEW_LOADING_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BY_FRIENDLY_URL", function() { return GET_BY_FRIENDLY_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_BUSINESS_REVIEW_URL", function() { return SUBMIT_BUSINESS_REVIEW_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BUSINESS", function() { return SET_BUSINESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_EMPTY_STATE", function() { return SET_EMPTY_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REVIEWS", function() { return SET_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REVIEW_MODAL_STATE", function() { return SET_REVIEW_MODAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REVIEW_LOADING_STATE", function() { return SET_REVIEW_LOADING_STATE; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");

const GET_BY_FRIENDLY_URL = `${_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_API"]}businesses/getByFriendlyUrl`;
const SUBMIT_BUSINESS_REVIEW_URL = `${_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_API"]}businessSurveys/submitBusinessReview`;
const SET_BUSINESS = 'SET_BUSINESS';
const SET_EMPTY_STATE = 'SET_EMPTY_STATE';
const SET_REVIEWS = 'SET_REVIEWS';
const SET_REVIEW_MODAL_STATE = 'SET_REVIEW_MODAL_STATE';
const SET_REVIEW_LOADING_STATE = 'SET_REVIEW_LOADING_STATE';

/***/ }),

/***/ "./src/reducers/BusinessPage/index.js":
/*!********************************************!*\
  !*** ./src/reducers/BusinessPage/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/reducers/BusinessPage/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  business: undefined,
  isLoading: false,
  isReviewLoading: false,
  isReviewModalOpen: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INITIAL_STATE, action = {}) => {
  const payload = action ? action.payload : {};

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_BUSINESS"]:
      return _objectSpread({}, state, {
        business: payload.business,
        isLoading: false
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_EMPTY_STATE"]:
      return _objectSpread({}, state, {
        isLoading: false,
        business: undefined
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_REVIEW_MODAL_STATE"]:
      return _objectSpread({}, state, {
        isReviewModalOpen: payload.isReviewModalOpen
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_REVIEWS"]:
      return _objectSpread({}, state, {
        isReviewModalOpen: false,
        isReviewLoading: false,
        business: _objectSpread({}, state.business, {
          reviewsList: payload.reviewsList,
          userReview: payload.userReview
        })
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_REVIEW_LOADING_STATE"]:
      return _objectSpread({}, state, {
        isReviewLoading: payload.isReviewLoading
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/Search/actions.js":
/*!****************************************!*\
  !*** ./src/reducers/Search/actions.js ***!
  \****************************************/
/*! exports provided: getCountries, getPlaceDetails, setSearchModalState, searchQuery, navigateSearchBySubCategory, searchBySubCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountries", function() { return getCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaceDetails", function() { return getPlaceDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchModalState", function() { return setSearchModalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchQuery", function() { return searchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateSearchBySubCategory", function() { return navigateSearchBySubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBySubCategory", function() { return searchBySubCategory; });
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_requestService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requestService */ "./src/services/requestService.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/reducers/Search/types.js");
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/urlBuilderService */ "./src/services/urlBuilderService.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getCountries = () => async dispatch => {
  const res = await Object(_services_requestService__WEBPACK_IMPORTED_MODULE_1__["getRequest"])('/placements/getPlacementsData');

  const payload = _objectSpread({
    isLoading: false
  }, res.data);

  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_COUNTRIES"],
    payload
  });
  return payload;
};
const getPlaceDetails = placeId => async dispatch => {
  const res = await Object(_services_requestService__WEBPACK_IMPORTED_MODULE_1__["getRequest"])(`/placements/getPlaceDetails?placeId=${placeId}`);
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_PLACE_DETAILS"],
    payload: _objectSpread({
      isLoading: false
    }, res.data)
  });
};
function setSearchModalState(isSearchOpen) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_MODAL_STATE"],
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
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SEARCH_QUERY"],
    payload: firstPayload
  });

  if (query) {
    const res = await Object(_services_requestService__WEBPACK_IMPORTED_MODULE_1__["getRequest"])(`webSearch/searchByQuery?query=${query}`);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["SEARCH_QUERY"],
      payload: {
        autocompleteList: res.data,
        isSearchLoading: false
      }
    });
  }
};
const navigateSearchBySubCategory = (selectedPlace, subCategory) => async dispatch => {
  const targetUrl = Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_3__["buildSearchUrl"])({
    placeId: selectedPlace._id,
    subCategoryId: subCategory._id
  });
  dispatch(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_0__["push"])(targetUrl));
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SUB_CATEGORY"],
    payload: {
      isLoading: true,
      selectedSubCategory: subCategory
    }
  });
};
const searchBySubCategory = (placeId, subCategoryId) => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SUB_CATEGORY"],
    payload: {
      isLoading: true
    }
  });
  const res = await Object(_services_requestService__WEBPACK_IMPORTED_MODULE_1__["getRequest"])(`webSearch/searchBySubCategory?placeId=${placeId}&subCategoryId=${subCategoryId}`);

  const payload = _objectSpread({
    isLoading: false
  }, res.data);

  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SUB_CATEGORY"],
    payload
  });
  return payload;
};

/***/ }),

/***/ "./src/reducers/Search/index.js":
/*!**************************************!*\
  !*** ./src/reducers/Search/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/reducers/Search/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  isLoading: false,
  isSearchOpen: false,
  isSearchLoading: false,
  selectedPlace: undefined,
  subCategoriesList: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INITIAL_STATE, action = {}) => {
  const payload = action ? action.payload : {};

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_COUNTRIES"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_PLACE_DETAILS"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_MODAL_STATE"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["SEARCH_QUERY"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["SEARCH_SUB_CATEGORY"]:
      return _objectSpread({}, state, {}, payload);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/Search/types.js":
/*!**************************************!*\
  !*** ./src/reducers/Search/types.js ***!
  \**************************************/
/*! exports provided: SET_COUNTRIES, SET_PLACE_DETAILS, SET_MODAL_STATE, SEARCH_QUERY, SEARCH_SUB_CATEGORY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNTRIES", function() { return SET_COUNTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PLACE_DETAILS", function() { return SET_PLACE_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MODAL_STATE", function() { return SET_MODAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_QUERY", function() { return SEARCH_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_SUB_CATEGORY", function() { return SEARCH_SUB_CATEGORY; });
const SET_COUNTRIES = 'SET_COUNTRIES';
const SET_PLACE_DETAILS = 'SET_PLACE_DETAILS';
const SET_MODAL_STATE = 'SET_MODAL_STATE';
const SEARCH_QUERY = 'SEARCH_QUERY';
const SEARCH_SUB_CATEGORY = 'SEARCH_SUB_CATEGORY';

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BusinessPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BusinessPage */ "./src/reducers/BusinessPage/index.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search */ "./src/reducers/Search/index.js");
 // import { connectRouter } from 'connected-react-router';




const createRootReducer = history => Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  // router: connectRouter(history),
  BusinessPageReducer: _BusinessPage__WEBPACK_IMPORTED_MODULE_1__["default"],
  SearchReducer: _Search__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/* harmony default export */ __webpack_exports__["default"] = (createRootReducer);

/***/ }),

/***/ "./src/services/analyticsService.js":
/*!******************************************!*\
  !*** ./src/services/analyticsService.js ***!
  \******************************************/
/*! exports provided: initAnalytics, reportEvent, reportScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAnalytics", function() { return initAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportEvent", function() { return reportEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportScreen", function() { return reportScreen; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize('912341008826-mdvp869k8s8orq80sklbp8o64r26soc9.apps.googleusercontent.com');
const initAnalytics = () => {// console.log('init')
  // ReactGA.initialize('UA-129440192-1')
  // history.listen(location => ReactGA.pageview(location.pathname));
  // Crashlytics.crash();
};
const reportEvent = params => {
  // if (env !== 'prod') return;
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event(params);
};
const reportScreen = screenName => {
  // if (env !== 'prod') return;
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(screenName);
};

/***/ }),

/***/ "./src/services/commonService.js":
/*!***************************************!*\
  !*** ./src/services/commonService.js ***!
  \***************************************/
/*! exports provided: isMobile, setCookie, getCookie, getFriendlyTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyTime", function() { return getFriendlyTime; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
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

/***/ "./src/services/notificationService.js":
/*!*********************************************!*\
  !*** ./src/services/notificationService.js ***!
  \*********************************************/
/*! exports provided: showErrorToast, showSuccessToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showErrorToast", function() { return showErrorToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuccessToast", function() { return showSuccessToast; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);

const showErrorToast = errorMessage => {
  react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(errorMessage);
};
const showSuccessToast = msg => {
  react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success(msg);
};

/***/ }),

/***/ "./src/services/requestService.js":
/*!****************************************!*\
  !*** ./src/services/requestService.js ***!
  \****************************************/
/*! exports provided: postRequest, getRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRequest", function() { return postRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequest", function() { return getRequest; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _commonService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commonService */ "./src/services/commonService.js");
/* harmony import */ var _notificationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificationService */ "./src/services/notificationService.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const postRequest = (relativeUrl, params = {}, headers = {}) => {
  const requestUrl = `${_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"]}${relativeUrl}`;
  return Axios.post(requestUrl, params, {
    headers: _objectSpread({}, headers)
  });
};
const getRequest = (relativeUrl, params = {}, headers = {}) => {
  const requestUrl = `${_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"]}${relativeUrl}`;
  return Axios.get(requestUrl, {
    params,
    headers: _objectSpread({}, headers, {
      'Content-Type': 'application/json'
    }),
    mode: 'cors'
  });
};

/***/ }),

/***/ "./src/services/urlBuilderService.js":
/*!*******************************************!*\
  !*** ./src/services/urlBuilderService.js ***!
  \*******************************************/
/*! exports provided: buildPlaceUrl, buildSearchUrl, buildBusinesUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPlaceUrl", function() { return buildPlaceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSearchUrl", function() { return buildSearchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildBusinesUrl", function() { return buildBusinesUrl; });
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
const buildBusinesUrl = business => {
  const {
    friendlyUrl,
    _id,
    englishName
  } = business;
  return `/business/${_id}/${friendlyUrl || englishName || ''}`;
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map