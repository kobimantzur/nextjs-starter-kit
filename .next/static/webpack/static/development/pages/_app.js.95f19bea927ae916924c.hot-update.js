webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.js":
/*!***********************************************************************************!*\
  !*** ./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutocompleteOptions; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../services/urlBuilderService */ "./src/services/urlBuilderService.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/containers/shared/SearchModal/Components/AutocompleteOptions/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var AutocompleteOptions =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AutocompleteOptions, _Component);

  function AutocompleteOptions() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AutocompleteOptions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AutocompleteOptions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onPlaceClick", function (place) {
      // const targetUrl = buildPlaceUrl(place);
      _this.props.setSearchModalState(false); // this.props.push(targetUrl);

    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AutocompleteOptions, [{
    key: "getBoldedText",
    value: function getBoldedText(pattern, text) {
      if (!text) return '';
      if (!pattern) return text;
      var updatedText = text.replace(pattern, "<strong>".concat(pattern, "</strong>"));
      return updatedText;
    }
  }, {
    key: "renderPlacements",
    value: function renderPlacements(placementsList) {
      var _this2 = this;

      var query = this.props.query;
      if (!placementsList) return null;
      return __jsx("div", {
        className: "placements-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, placementsList.map(function (placement) {
        var placementText = "".concat(placement.heName, " ").concat(placement.country ? ", ".concat(placement.country.heName) : '');
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          key: placement._id,
          href: Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_9__["buildPlaceUrl"])(placement),
          onClick: function onClick() {
            return _this2.onPlaceClick(placement);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, __jsx("a", {
          className: "placement",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, __jsx("i", {
          className: "fas fa-map-marker-alt",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }), __jsx("span", {
          className: "name",
          dangerouslySetInnerHTML: {
            __html: _this2.getBoldedText(query, placementText)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        })));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var autocompleteList = this.props.autocompleteList;
      if (!autocompleteList) return null;
      var placementsList = autocompleteList.placementsList;
      return __jsx("div", {
        className: "autocomplete-options",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.renderPlacements(placementsList));
    }
  }]);

  return AutocompleteOptions;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.95f19bea927ae916924c.hot-update.js.map