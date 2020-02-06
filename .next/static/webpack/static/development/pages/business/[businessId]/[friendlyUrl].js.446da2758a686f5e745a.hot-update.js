webpackHotUpdate("static/development/pages/business/[businessId]/[friendlyUrl].js",{

/***/ "./src/containers/BusinessPage/Components/ShareButtons/index.js":
/*!**********************************************************************!*\
  !*** ./src/containers/BusinessPage/Components/ShareButtons/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareButtons; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/containers/BusinessPage/Components/ShareButtons/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/urlBuilderService */ "./src/services/urlBuilderService.js");







var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/containers/BusinessPage/Components/ShareButtons/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var ShareButtons =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ShareButtons, _Component);

  function ShareButtons() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShareButtons);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ShareButtons)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClick", function (type) {
      var business = _this.props.business; // const { friendlyUrl } = business;

      var shareTitle = 'המלצה על אטרקציות בברלין - אלכסנדרפלץ';
      var sharableUrl = "https://app.mymapo.com/business/".concat(Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_9__["buildBusinessUrl"])(business));

      switch (type) {
        case 'facebook':
          window.open("https://www.facebook.com/sharer.php?u=".concat(sharableUrl));
          break;

        case 'whatsapp':
          // window.open(`whatsapp://send?text=${shareTitle}\n${encodeURIComponent(sharableUrl)}`);
          window.open("whatsapp://send?text=".concat(encodeURIComponent(sharableUrl)));
          break;

        case 'twitter':
          window.open("http://twitter.com/share?url=".concat(sharableUrl, "&hashtags=Mapo&text=").concat(shareTitle));
          break;

        case 'clipboard':
          _this.copyToClipboard("".concat(shareTitle, "\n ").concat(sharableUrl));

          break;

        default:
          break;
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ShareButtons, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "share-buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("i", {
        className: "fab fa-facebook-square fb",
        onClick: function onClick() {
          return _this2.onClick('facebook');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), __jsx("i", {
        className: "fab fa-whatsapp wa",
        onClick: function onClick() {
          return _this2.onClick('whatsapp');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("i", {
        className: "fab fa-twitter tw",
        onClick: function onClick() {
          return _this2.onClick('twitter');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }));
    }
  }]);

  return ShareButtons;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=[friendlyUrl].js.446da2758a686f5e745a.hot-update.js.map