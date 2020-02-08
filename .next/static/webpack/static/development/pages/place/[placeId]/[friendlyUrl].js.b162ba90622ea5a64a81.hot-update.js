webpackHotUpdate("static/development/pages/place/[placeId]/[friendlyUrl].js",{

/***/ "./src/containers/PlacePage/Components/CitiesPicker/index.js":
/*!*******************************************************************!*\
  !*** ./src/containers/PlacePage/Components/CitiesPicker/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CitiesPicker; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/containers/PlacePage/Components/CitiesPicker/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/urlBuilderService */ "./src/services/urlBuilderService.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/containers/PlacePage/Components/CitiesPicker/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var CitiesPicker =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CitiesPicker, _Component);

  function CitiesPicker() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CitiesPicker);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CitiesPicker).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CitiesPicker, [{
    key: "renderCity",
    value: function renderCity(city) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        key: city._id,
        href: Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_7__["buildPlaceUrl"])(city),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("a", {
        className: "city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("div", {
        className: "city-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, city.heName), __jsx("div", {
        className: "b-image",
        style: {
          backgroundImage: "url(".concat(city.headerImage, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var citiesList = this.props.citiesList;
      if (!citiesList || citiesList.length === 0) return null;
      return __jsx("div", {
        className: "city-picker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("div", {
        className: "picker-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "\u05D1\u05D7\u05E8\u05D5 \u05E2\u05D9\u05E8"), __jsx("div", {
        className: "cities-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, citiesList.map(function (city) {
        return _this.renderCity(city);
      })));
    }
  }]);

  return CitiesPicker;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=[friendlyUrl].js.b162ba90622ea5a64a81.hot-update.js.map