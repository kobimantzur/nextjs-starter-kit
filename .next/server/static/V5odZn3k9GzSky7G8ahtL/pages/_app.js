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

/***/ "+cKX":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/google-app-e85f96de3c6d1dca5358c9f068b58dbe.png";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0KjZ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/apple-app-1e82320299f2a47d929fa5a925a02753.png";

/***/ }),

/***/ "0X4T":
/***/ (function(module, exports) {



/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: ./src/reducers/BusinessPage/constants.js
var constants = __webpack_require__("X65i");

// CONCATENATED MODULE: ./src/reducers/BusinessPage/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  business: undefined,
  isLoading: false,
  isReviewLoading: false,
  isReviewModalOpen: false
};
/* harmony default export */ var BusinessPage = ((state = INITIAL_STATE, action = {}) => {
  const payload = action ? action.payload : {};

  switch (action.type) {
    case constants["b" /* SET_BUSINESS */]:
      return _objectSpread({}, state, {
        business: payload.business,
        isLoading: false
      });

    case constants["c" /* SET_EMPTY_STATE */]:
      return _objectSpread({}, state, {
        isLoading: false,
        business: undefined
      });

    case constants["f" /* SET_REVIEW_MODAL_STATE */]:
      return _objectSpread({}, state, {
        isReviewModalOpen: payload.isReviewModalOpen
      });

    case constants["d" /* SET_REVIEWS */]:
      return _objectSpread({}, state, {
        isReviewModalOpen: false,
        isReviewLoading: false,
        business: _objectSpread({}, state.business, {
          reviewsList: payload.reviewsList,
          userReview: payload.userReview
        })
      });

    case constants["e" /* SET_REVIEW_LOADING_STATE */]:
      return _objectSpread({}, state, {
        isReviewLoading: payload.isReviewLoading
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: ./src/reducers/Search/types.js
var types = __webpack_require__("i3V0");

// CONCATENATED MODULE: ./src/reducers/Search/index.js
function Search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Search_ownKeys(Object(source), true).forEach(function (key) { Search_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Search_INITIAL_STATE = {
  isLoading: false,
  isSearchOpen: false,
  isSearchLoading: false,
  selectedPlace: undefined,
  subCategoriesList: []
};
/* harmony default export */ var Search = ((state = Search_INITIAL_STATE, action = {}) => {
  const payload = action ? action.payload : {};

  switch (action.type) {
    case types["c" /* SET_COUNTRIES */]:
    case types["e" /* SET_PLACE_DETAILS */]:
    case types["d" /* SET_MODAL_STATE */]:
    case types["a" /* SEARCH_QUERY */]:
    case types["b" /* SEARCH_SUB_CATEGORY */]:
      return Search_objectSpread({}, state, {}, payload);

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/index.js
 // import { connectRouter } from 'connected-react-router';




const createRootReducer = history => Object(external_redux_["combineReducers"])({
  // router: connectRouter(history),
  BusinessPageReducer: BusinessPage,
  SearchReducer: Search
});

/* harmony default export */ var reducers = (createRootReducer);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/img/apple-app.png
var apple_app = __webpack_require__("0KjZ");
var apple_app_default = /*#__PURE__*/__webpack_require__.n(apple_app);

// EXTERNAL MODULE: ./src/img/google-app.png
var google_app = __webpack_require__("+cKX");
var google_app_default = /*#__PURE__*/__webpack_require__.n(google_app);

// EXTERNAL MODULE: ./src/containers/SearchPage/Components/SearchBar/index.js
var Components_SearchBar = __webpack_require__("kybl");

// EXTERNAL MODULE: ./src/reducers/Search/actions.js + 2 modules
var actions = __webpack_require__("HWjx");

// EXTERNAL MODULE: ./src/components/Layout/Components/AppHeader/index.scss
var Components_AppHeader = __webpack_require__("pvn2");

// EXTERNAL MODULE: ./src/services/commonService.js
var commonService = __webpack_require__("fFt1");

// CONCATENATED MODULE: ./src/components/Layout/Components/AppHeader/index.js
var __jsx = external_react_default.a.createElement;









const PLACEHOLDER_TEXT = 'חפשו במאפו';
const {
  Header
} = external_antd_["Layout"];

class AppHeader_AppHeader extends external_react_["Component"] {
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
      className: `header ${isFocused ? 'on-focus' : ''} ${activeClass}`
    }, __jsx("div", {
      className: "right"
    }, __jsx("a", {
      href: "/"
    }, __jsx("img", {
      alt: "Mapo",
      className: "logo",
      src: '/static/img/logo-white.png'
    })), !isLoading && __jsx("div", {
      className: "search-bar-preview",
      onClick: () => this.props.setSearchModalState(true)
    }, !Object(commonService["b" /* isMobile */])() && __jsx("span", null, searchTerm || PLACEHOLDER_TEXT), __jsx("i", {
      className: "fa fa-search"
    }))), Object(commonService["b" /* isMobile */])() && __jsx("div", {
      className: "store-icons"
    }, __jsx("a", {
      target: "_blank",
      rel: "noopener noreferer",
      href: "https://itunes.apple.com/us/app/avartii-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%9D-%D7%91%D7%9C%D7%95%D7%A1-%D7%90%D7%A0%D7%92-%D7%9C%D7%A1/id1329505993?mt=8"
    }, __jsx("img", {
      className: "appstore",
      alt: "AppStore",
      src: apple_app_default.a
    })), __jsx("a", {
      target: "_blank",
      href: "https://play.google.com/store/apps/details?id=com.avartii.app"
    }, __jsx("img", {
      className: "google",
      alt: "Google Play Store",
      src: google_app_default.a
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
  setSearchModalState: actions["f" /* setSearchModalState */]
};
/* harmony default export */ var Layout_Components_AppHeader = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(AppHeader_AppHeader));
// EXTERNAL MODULE: ./src/components/Layout/Components/AppFooter/styles.scss
var styles = __webpack_require__("Gurp");

// CONCATENATED MODULE: ./src/components/Layout/Components/AppFooter/index.js
var AppFooter_jsx = external_react_default.a.createElement;



const {
  Footer
} = external_antd_["Layout"];
const defaultProps = {};
class AppFooter_AppFooter extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return AppFooter_jsx(Footer, {
      className: "footer"
    }, AppFooter_jsx("div", {
      className: "text"
    }, "Copyright \xA9 2018 Mapo. All rights reserved |", ' ', AppFooter_jsx("a", {
      href: "mailto:contact@mymapo.com"
    }, "contact@mymapo.com")));
  }

}
AppFooter_AppFooter.defaultProps = defaultProps;
// EXTERNAL MODULE: ./src/components/Layout/index.scss
var components_Layout = __webpack_require__("TS5P");

// EXTERNAL MODULE: ./src/services/analyticsService.js
var analyticsService = __webpack_require__("LeLi");

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-free/css/all.css
var css_all = __webpack_require__("FfUf");
var all_default = /*#__PURE__*/__webpack_require__.n(css_all);

// EXTERNAL MODULE: ./node_modules/antd/dist/antd.min.css
var antd_min = __webpack_require__("SAkk");
var antd_min_default = /*#__PURE__*/__webpack_require__.n(antd_min);

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__("7koQ");
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);

// EXTERNAL MODULE: external "connected-react-router"
var external_connected_react_router_ = __webpack_require__("B6+W");

// EXTERNAL MODULE: ./src/containers/shared/SearchModal/Components/SearchBar/index.scss
var SearchModal_Components_SearchBar = __webpack_require__("comn");

// CONCATENATED MODULE: ./src/containers/shared/SearchModal/Components/SearchBar/index.js
var SearchBar_jsx = external_react_default.a.createElement;

function SearchBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Search: SearchBar_Search
} = external_antd_["Input"];
class SearchBar_SearchBar extends external_react_["Component"] {
  constructor(props) {
    super(props);

    SearchBar_defineProperty(this, "onSearch", e => {
      const query = e.target.value;
      this.props.searchQuery(query);
    });

    this.inputRef = external_react_default.a.createRef();
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
    return SearchBar_jsx("div", {
      className: "search-bar"
    }, isSearchLoading && SearchBar_jsx(external_antd_["Icon"], {
      type: "loading",
      style: {
        fontSize: 24
      },
      spin: true
    }), SearchBar_jsx(SearchBar_Search, {
      ref: r => this.inputRef = r,
      prefixCls: "search-input",
      placeholder: "\u05D7\u05E4\u05E9\u05D5 \u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D0\u05D5 \u05E2\u05E8\u05D9\u05DD",
      onChange: e => this.onSearch(e),
      enterButton: true
    }));
  }

}
// EXTERNAL MODULE: ./src/containers/shared/SearchModal/index.scss
var shared_SearchModal = __webpack_require__("0X4T");

// EXTERNAL MODULE: ./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.scss
var Components_AutocompleteOptions = __webpack_require__("jNfC");

// EXTERNAL MODULE: ./src/services/urlBuilderService.js
var urlBuilderService = __webpack_require__("S/If");

// CONCATENATED MODULE: ./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.js
var AutocompleteOptions_jsx = external_react_default.a.createElement;

function AutocompleteOptions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class AutocompleteOptions_AutocompleteOptions extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    AutocompleteOptions_defineProperty(this, "onPlaceClick", place => {
      const targetUrl = Object(urlBuilderService["b" /* buildPlaceUrl */])(place);
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
    return AutocompleteOptions_jsx("div", {
      className: "placements-list"
    }, placementsList.map(placement => {
      const placementText = `${placement.heName} ${placement.country ? `, ${placement.country.heName}` : ''}`;
      return AutocompleteOptions_jsx("div", {
        className: "placement",
        key: placement._id,
        onClick: () => this.onPlaceClick(placement)
      }, AutocompleteOptions_jsx("i", {
        className: "fas fa-map-marker-alt"
      }), AutocompleteOptions_jsx("span", {
        className: "name",
        dangerouslySetInnerHTML: {
          __html: this.getBoldedText(query, placementText)
        }
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
    return AutocompleteOptions_jsx("div", {
      className: "autocomplete-options"
    }, this.renderPlacements(placementsList));
  }

}
// CONCATENATED MODULE: ./src/containers/shared/SearchModal/index.js
var SearchModal_jsx = external_react_default.a.createElement;







 // Modal.setAppElement('#react-root');

external_react_modal_default.a.setAppElement('#__next');

class SearchModal_SearchModal extends external_react_["Component"] {
  render() {
    const {
      isSearchOpen
    } = this.props;
    return SearchModal_jsx(external_react_modal_default.a, {
      id: "searchModal",
      isOpen: isSearchOpen,
      onRequestClose: () => this.props.setSearchModalState(false),
      contentLabel: "Example Modal"
    }, SearchModal_jsx(SearchBar_SearchBar, this.props), SearchModal_jsx(AutocompleteOptions_AutocompleteOptions, this.props));
  }

}

const SearchModal_mapStateToProps = ({
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

const SearchModal_mapDispatchToProps = {
  setSearchModalState: actions["f" /* setSearchModalState */],
  searchQuery: actions["e" /* searchQuery */],
  push: external_connected_react_router_["push"]
};
/* harmony default export */ var containers_shared_SearchModal = (Object(external_react_redux_["connect"])(SearchModal_mapStateToProps, SearchModal_mapDispatchToProps)(SearchModal_SearchModal));
// CONCATENATED MODULE: ./src/components/Layout/index.js
var Layout_jsx = external_react_default.a.createElement;












const Layout_defaultProps = {};

class Layout_Layout extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Object(analyticsService["a" /* initAnalytics */])();
  }

  render() {
    return Layout_jsx(external_antd_["Layout"], null, Layout_jsx("style", {
      dangerouslySetInnerHTML: {
        __html: antd_min_default.a
      }
    }), Layout_jsx("style", {
      dangerouslySetInnerHTML: {
        __html: all_default.a
      }
    }), Layout_jsx(Layout_Components_AppHeader, this.props), this.props.children, Layout_jsx(AppFooter_AppFooter, null), Layout_jsx(containers_shared_SearchModal, this.props));
  }

}

Layout_Layout.defaultProps = Layout_defaultProps;
/* harmony default export */ var src_components_Layout = (Layout_Layout);
// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;
// pages/_app.js







const composeEnhancer = external_redux_["compose"];

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
  return Object(external_redux_["createStore"])(reducers(), initialState, composeEnhancer(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
};

class _app_MyApp extends app_default.a {
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
    return _app_jsx(external_react_redux_["Provider"], {
      store: store
    }, _app_jsx(src_components_Layout, null, _app_jsx(Component, pageProps)));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(makeStore)(_app_MyApp));

/***/ }),

/***/ "7koQ":
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "B6+W":
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FfUf":
/***/ (function(module, exports) {



/***/ }),

/***/ "Gurp":
/***/ (function(module, exports) {



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

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "LeLi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reportEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reportScreen; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lJcc");
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

/***/ "S/If":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return buildPlaceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return buildSearchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildBusinesUrl; });
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

/***/ "SAkk":
/***/ (function(module, exports) {



/***/ }),

/***/ "TS5P":
/***/ (function(module, exports) {



/***/ }),

/***/ "X65i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_BY_FRIENDLY_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SUBMIT_BUSINESS_REVIEW_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_BUSINESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_EMPTY_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_REVIEW_MODAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_REVIEW_LOADING_STATE; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("X7BR");

const GET_BY_FRIENDLY_URL = `${_constants__WEBPACK_IMPORTED_MODULE_0__[/* BASE_API */ "a"]}businesses/getByFriendlyUrl`;
const SUBMIT_BUSINESS_REVIEW_URL = `${_constants__WEBPACK_IMPORTED_MODULE_0__[/* BASE_API */ "a"]}businessSurveys/submitBusinessReview`;
const SET_BUSINESS = 'SET_BUSINESS';
const SET_EMPTY_STATE = 'SET_EMPTY_STATE';
const SET_REVIEWS = 'SET_REVIEWS';
const SET_REVIEW_MODAL_STATE = 'SET_REVIEW_MODAL_STATE';
const SET_REVIEW_LOADING_STATE = 'SET_REVIEW_LOADING_STATE';

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

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "comn":
/***/ (function(module, exports) {



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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "jNfC":
/***/ (function(module, exports) {



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

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "pvn2":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });