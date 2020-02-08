webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Components_AppHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/AppHeader */ "./src/components/Layout/Components/AppHeader/index.js");
/* harmony import */ var _Components_AppFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/AppFooter */ "./src/components/Layout/Components/AppFooter/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.scss */ "./src/components/Layout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_analyticsService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/analyticsService */ "./src/services/analyticsService.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/dist/antd.min.css */ "./node_modules/antd/dist/antd.min.css");
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _containers_SearchPage_Components_SearchBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../containers/SearchPage/Components/SearchBar */ "./src/containers/SearchPage/Components/SearchBar/index.js");
/* harmony import */ var _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../reducers/Search/actions */ "./src/reducers/Search/actions.js");
/* harmony import */ var _containers_shared_SearchModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../containers/shared/SearchModal */ "./src/containers/shared/SearchModal/index.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;












var propTypes = {};
var defaultProps = {};

var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_services_analyticsService__WEBPACK_IMPORTED_MODULE_11__["initAnalytics"])();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Layout"], null, __jsx("style", {
        dangerouslySetInnerHTML: {
          __html: antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_13___default.a
        }
      }), __jsx("style", {
        dangerouslySetInnerHTML: {
          __html: _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_12___default.a
        }
      }), __jsx(_Components_AppHeader__WEBPACK_IMPORTED_MODULE_8__["default"], this.props), this.props.children, __jsx(_Components_AppFooter__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_containers_shared_SearchModal__WEBPACK_IMPORTED_MODULE_16__["default"], this.props));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.b1d04b056322065bb752.hot-update.js.map