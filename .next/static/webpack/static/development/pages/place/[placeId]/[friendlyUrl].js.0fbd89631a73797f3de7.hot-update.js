webpackHotUpdate("static/development/pages/place/[placeId]/[friendlyUrl].js",{

/***/ "./src/components/Breadcrumbs/index.js":
/*!*********************************************!*\
  !*** ./src/components/Breadcrumbs/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Breadcrumbs; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/components/Breadcrumbs/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/urlBuilderService */ "./src/services/urlBuilderService.js");








var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/components/Breadcrumbs/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


 // import { Link } from 'react-router-dom';




var Breadcrumbs =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Breadcrumbs, _Component);

  function Breadcrumbs() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Breadcrumbs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Breadcrumbs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onClick", function (link) {// link && this.props.push(link);
      // TODO: report GA
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Breadcrumbs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.props.items;
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Breadcrumb"], {
        className: "breadcrumbs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Breadcrumb"].Item, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        type: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "\u05E8\u05D0\u05E9\u05D9")), items.map(function (item, index) {
        var additionalProps = {};

        if (item.link) {
          additionalProps.onClick = function () {// this.props.push(item.link);
            // TODO: report GA
          };
        } else {
          additionalProps.className = 'disabled';
        }

        if (item.isHighlighted) {
          additionalProps.className = additionalProps.className ? "".concat(additionalProps.className, " highlighted") : 'highlighted';
        }

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Breadcrumb"].Item, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, additionalProps, {
          onClick: function onClick() {
            return _this2.onClick(item.link);
          },
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }), !item.isHighlighted && item.placeObject && item.subCategoryObject && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_12__["buildSearchUrl"])({
            placeId: item.placeObject._id,
            subCategoryId: item.subCategoryObject._id
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, item.title)), !item.isHighlighted && item.placeObject && !item.subCategoryObject && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_12__["buildPlaceUrl"])(item.placeObject),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, item.title), (item.isHighlighted || !item.placeObject && !item.subCategoryObject) && __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, item.title));
      }));
    }
  }]);

  return Breadcrumbs;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=[friendlyUrl].js.0fbd89631a73797f3de7.hot-update.js.map