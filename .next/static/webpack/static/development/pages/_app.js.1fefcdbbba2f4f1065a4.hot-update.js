webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _src_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/reducers */ "./src/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
// pages/_app.js







var composeEnhancer = redux__WEBPACK_IMPORTED_MODULE_7__["compose"];


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

var makeStore = function makeStore(initialState, options) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(Object(_src_reducers__WEBPACK_IMPORTED_MODULE_11__["default"])(), initialState, composeEnhancer(Object(redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_12__["default"])));
};

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "getPageDescription",
    value: function getPageDescription() {
      return "\u05D2\u05DC\u05D5 \u05D0\u05EA \u05D4\u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05D4\u05DB\u05D9 \u05D7\u05DE\u05D5\u05EA \u05E9\u05D9\u05D4\u05E4\u05DB\u05D5 \u05D0\u05EA \u05D4\u05D8\u05D9\u05D5\u05DC \u05D4\u05D1\u05D0 \u05E9\u05DC\u05DB\u05DD \u05DC\u05D1\u05DC\u05EA\u05D9 \u05E0\u05E9\u05DB\u05D7";
    }
  }, {
    key: "getPageTitle",
    value: function getPageTitle() {
      return "Mapo | \u05DE\u05D8\u05D9\u05D9\u05DC\u05D9\u05DD \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD \u05D1\u05D7\u05D5\u05F4\u05DC";
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
        store: store
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_15___default.a, null, __jsx("meta", {
        key: "title",
        property: "title",
        content: this.getPageTitle()
      }), __jsx("meta", {
        key: "description",
        property: "description",
        content: this.getPageDescription()
      }), __jsx("meta", {
        key: "og:title",
        property: "og:title",
        content: this.getPageTitle()
      }), __jsx("meta", {
        key: "og:image",
        property: "og:image",
        content: "https://www.mymapo.com/static/img/meta/wide-share.jpg"
      }), __jsx("meta", {
        key: "og:description",
        property: "og:description",
        content: this.getPageDescription()
      }), __jsx("meta", {
        key: "fb:app_id",
        property: "fb:app_id",
        content: "291124068055220"
      }), __jsx("meta", {
        key: "twitter:image:src",
        property: "twitter:image:src",
        content: "https://www.mymapo.com/static/img/meta/wide-share.jpg"
      }), __jsx("meta", {
        key: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      }), __jsx("meta", {
        key: "twitter:description",
        name: "twitter:description",
        content: this.getPageDescription()
      }), __jsx("meta", {
        key: "keywords",
        name: "keywords",
        content: "mapo, \u05DE\u05D0\u05E4\u05D5, \u05DE\u05D8\u05D9\u05D9\u05DC\u05D9\u05DD, \u05D5\u05D9\u05D6\u05D4 \u05DC\u05D0\u05E8\u05E6\u05D5\u05EA \u05D4\u05D1\u05E8\u05D9\u05EA, \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA, \u05D7\u05D5\u05DC"
      }), __jsx("meta", {
        name: "apple-itunes-app",
        content: "app-id=1329505993"
      }), __jsx("link", {
        href: "ios-app://1329505993",
        rel: "alternate"
      }), __jsx("meta", {
        property: "al:ios:app_name",
        content: "Mapo"
      }), __jsx("meta", {
        property: "al:ios:app_store_id",
        content: "1329505993"
      }), __jsx("meta", {
        property: "al:ios:url",
        content: "https://www.mymapo.com/"
      }), __jsx("link", {
        href: "android-app://com.avartii.app",
        rel: "alternate"
      })), __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], null, __jsx(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var Component, ctx, pageProps;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Component = _ref.Component, ctx = _ref.ctx;
              // we can dispatch from here too
              ctx.store.dispatch({
                type: 'FOO',
                payload: 'foo'
              });

              if (!Component.getInitialProps) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

            case 5:
              _context.t0 = _context.sent;
              _context.next = 9;
              break;

            case 8:
              _context.t0 = {};

            case 9:
              pageProps = _context.t0;
              return _context.abrupt("return", {
                pageProps: pageProps
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__["default"])(makeStore)(MyApp));

/***/ })

})
//# sourceMappingURL=_app.js.1fefcdbbba2f4f1065a4.hot-update.js.map