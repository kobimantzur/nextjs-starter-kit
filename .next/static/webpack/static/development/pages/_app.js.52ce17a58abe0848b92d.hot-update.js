webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/containers/shared/SearchModal/index.js":
/*!****************************************************!*\
  !*** ./src/containers/shared/SearchModal/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../reducers/Search/actions */ "./src/reducers/Search/actions.js");
/* harmony import */ var _Components_SearchBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/SearchBar */ "./src/containers/shared/SearchModal/Components/SearchBar/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.scss */ "./src/containers/shared/SearchModal/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_AutocompleteOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/AutocompleteOptions */ "./src/containers/shared/SearchModal/Components/AutocompleteOptions/index.js");






var _jsxFileName = "/Users/kobi.mantzur/m/n/src/containers/shared/SearchModal/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







 // Modal.setAppElement('#react-root');

react_modal__WEBPACK_IMPORTED_MODULE_7___default.a.setAppElement('#__next');

var SearchModal =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchModal, _Component);

  function SearchModal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchModal);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchModal).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchModal, [{
    key: "render",
    value: function render() {
      var _this = this;

      var isSearchOpen = this.props.isSearchOpen;
      return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "searchModal",
        isOpen: isSearchOpen,
        onRequestClose: function onRequestClose() {
          return _this.props.setSearchModalState(false);
        },
        contentLabel: "Example Modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(_Components_SearchBar__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), __jsx(_Components_AutocompleteOptions__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })));
    }
  }]);

  return SearchModal;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var SearchReducer = _ref.SearchReducer;
  var isSearchOpen = SearchReducer.isSearchOpen,
      isSearchLoading = SearchReducer.isSearchLoading,
      autocompleteList = SearchReducer.autocompleteList,
      query = SearchReducer.query;
  return {
    isSearchOpen: isSearchOpen,
    isSearchLoading: isSearchLoading,
    autocompleteList: autocompleteList,
    query: query
  };
};

var mapDispatchToProps = {
  setSearchModalState: _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_10__["setSearchModalState"],
  searchQuery: _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_10__["searchQuery"],
  push: connected_react_router__WEBPACK_IMPORTED_MODULE_8__["push"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(SearchModal));

/***/ })

})
//# sourceMappingURL=_app.js.52ce17a58abe0848b92d.hot-update.js.map