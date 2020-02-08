webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/Layout/Components/AppHeader/index.js":
/*!*************************************************************!*\
  !*** ./src/components/Layout/Components/AppHeader/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_apple_app_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../img/apple-app.png */ "./src/img/apple-app.png");
/* harmony import */ var _img_apple_app_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_apple_app_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_google_app_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../img/google-app.png */ "./src/img/google-app.png");
/* harmony import */ var _img_google_app_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_google_app_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _containers_SearchPage_Components_SearchBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../containers/SearchPage/Components/SearchBar */ "./src/containers/SearchPage/Components/SearchBar/index.js");
/* harmony import */ var _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../reducers/Search/actions */ "./src/reducers/Search/actions.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.scss */ "./src/components/Layout/Components/AppHeader/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_commonService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/commonService */ "./src/services/commonService.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Menu */ "./src/components/Layout/Components/Menu/index.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;










var PLACEHOLDER_TEXT = 'חפשו במאפו';
var Header = antd__WEBPACK_IMPORTED_MODULE_5__["Layout"].Header;

var AppHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppHeader, _Component);

  function AppHeader(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppHeader);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppHeader).call(this, props));
    _this.state = {
      isFocused: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('scroll', function () {
        var activeClass = '';

        if (window.scrollY > _this2.vw(15)) {
          activeClass = 'scrolled';
        }

        _this2.setState({
          activeClass: activeClass
        });
      });
    }
  }, {
    key: "vw",
    value: function vw(v) {
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      return v * w / 100;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          isFocused = _this$state.isFocused,
          activeClass = _this$state.activeClass;
      var _this$props = this.props,
          isLoading = _this$props.isLoading,
          selectedPlace = _this$props.selectedPlace,
          selectedSubCategory = _this$props.selectedSubCategory;
      var searchTerm = selectedPlace && selectedSubCategory ? "".concat(selectedSubCategory.title, " \u05D1").concat(selectedPlace.heName) : '';
      return __jsx(Header, {
        className: "header ".concat(isFocused ? 'on-focus' : '', " ").concat(activeClass)
      }, __jsx("div", {
        className: "right"
      }, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_14__["default"], this.props), __jsx("a", {
        href: "/"
      }, __jsx("img", {
        alt: "Mapo",
        className: "logo",
        src: '/static/img/logo-white.png'
      }))), __jsx("div", {
        className: "left"
      }, __jsx("div", {
        className: "search-bar-preview",
        onClick: function onClick() {
          return _this3.props.setSearchModalState(true);
        }
      }, !Object(_services_commonService__WEBPACK_IMPORTED_MODULE_13__["isMobile"])() && __jsx("span", null, PLACEHOLDER_TEXT), __jsx("i", {
        className: "fa fa-search"
      }))), Object(_services_commonService__WEBPACK_IMPORTED_MODULE_13__["isMobile"])() && __jsx("div", {
        className: "store-icons"
      }, __jsx("a", {
        target: "_blank",
        rel: "noopener noreferer",
        href: "https://itunes.apple.com/us/app/avartii-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%9D-%D7%91%D7%9C%D7%95%D7%A1-%D7%90%D7%A0%D7%92-%D7%9C%D7%A1/id1329505993?mt=8"
      }, __jsx("img", {
        className: "appstore",
        alt: "AppStore",
        src: _img_apple_app_png__WEBPACK_IMPORTED_MODULE_8___default.a
      })), __jsx("a", {
        target: "_blank",
        href: "https://play.google.com/store/apps/details?id=com.avartii.app"
      }, __jsx("img", {
        className: "google",
        alt: "Google Play Store",
        src: _img_google_app_png__WEBPACK_IMPORTED_MODULE_9___default.a
      }))));
    }
  }]);

  return AppHeader;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var SearchReducer = _ref.SearchReducer;
  var selectedPlace = SearchReducer.selectedPlace,
      selectedSubCategory = SearchReducer.selectedSubCategory,
      isLoading = SearchReducer.isLoading;
  return {
    isLoading: isLoading,
    selectedPlace: selectedPlace,
    selectedSubCategory: selectedSubCategory
  };
};

var mapDispatchToProps = {
  setSearchModalState: _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_11__["setSearchModalState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(AppHeader));

/***/ })

})
//# sourceMappingURL=_app.js.08e0f314988f50fcb0b2.hot-update.js.map