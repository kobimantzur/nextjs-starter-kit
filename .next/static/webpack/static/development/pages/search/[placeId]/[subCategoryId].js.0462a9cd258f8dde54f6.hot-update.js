webpackHotUpdate("static/development/pages/search/[placeId]/[subCategoryId].js",{

/***/ "./pages/search/[placeId]/[subCategoryId].js":
/*!***************************************************!*\
  !*** ./pages/search/[placeId]/[subCategoryId].js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_reducers_Search_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/reducers/Search/actions */ "./src/reducers/Search/actions.js");
/* harmony import */ var _src_containers_SearchResultsPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/containers/SearchResultsPage */ "./src/containers/SearchResultsPage/index.js");
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/constants */ "./src/constants.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/pages/search/[placeId]/[subCategoryId].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var SearchResults =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SearchResults, _Component);

  function SearchResults() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SearchResults);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchResults).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchResults, [{
    key: "getPageTitle",
    value: function getPageTitle() {
      var _this$props = this.props,
          selectedPlace = _this$props.selectedPlace,
          selectedSubCategory = _this$props.selectedSubCategory;

      if (!selectedPlace) {
        return _src_constants__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_PAGE_TITLE"];
      }

      return "Mapo | \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05E2\u05DC ".concat(selectedSubCategory.title, " \u05D1").concat(selectedPlace.heName);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("title", {
        key: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.getPageTitle())), __jsx(_src_containers_SearchResultsPage__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store, isServer, pathname, query, ctx, placeId, subCategoryId;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              store = _ref.store, isServer = _ref.isServer, pathname = _ref.pathname, query = _ref.query, ctx = _ref.ctx;
              placeId = query.placeId, subCategoryId = query.subCategoryId;
              _context.prev = 2;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(store.dispatch(Object(_src_reducers_Search_actions__WEBPACK_IMPORTED_MODULE_8__["searchBySubCategory"])(placeId, subCategoryId)));

            case 5:
              return _context.abrupt("return", {});

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);

            case 10:
              return _context.abrupt("return", {});

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[2, 8]]);
    }
  }]);

  return SearchResults;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

/***/ })

})
//# sourceMappingURL=[subCategoryId].js.0462a9cd258f8dde54f6.hot-update.js.map