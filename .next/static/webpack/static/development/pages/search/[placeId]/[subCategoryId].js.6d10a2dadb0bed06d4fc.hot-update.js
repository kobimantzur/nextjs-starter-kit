webpackHotUpdate("static/development/pages/search/[placeId]/[subCategoryId].js",{

/***/ "./src/containers/SearchResultsPage/index.js":
/*!***************************************************!*\
  !*** ./src/containers/SearchResultsPage/index.js ***!
  \***************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/containers/SearchResultsPage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Page */ "./src/components/Page/index.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Content */ "./src/components/Content/index.js");
/* harmony import */ var _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducers/Search/actions */ "./src/reducers/Search/actions.js");
/* harmony import */ var _components_BusinessListView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/BusinessListView */ "./src/components/BusinessListView/index.js");
/* harmony import */ var _components_SubCategoryPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/SubCategoryPicker */ "./src/components/SubCategoryPicker/index.js");
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/urlBuilderService */ "./src/services/urlBuilderService.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");






var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/containers/SearchResultsPage/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;











var SearchResultsPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchResultsPage, _Component);

  function SearchResultsPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchResultsPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchResultsPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchResultsPage, [{
    key: "componentDidUpdate",
    // componentDidMount() {
    //   this.loadResults();
    // }
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.loadResults();
      }
    }
  }, {
    key: "loadResults",
    value: function loadResults() {
      var urlParams = new URLSearchParams(window.location.search);
      var placeId = urlParams.get('placeId');
      var subCategoryId = urlParams.get('subCategoryId');
      this.props.searchBySubCategory(placeId, subCategoryId);
    }
  }, {
    key: "getPageTitle",
    value: function getPageTitle() {
      var _this$props = this.props,
          selectedPlace = _this$props.selectedPlace,
          selectedSubCategory = _this$props.selectedSubCategory;
      var resultTitle = 'תוצאות חיפוש';

      if (selectedPlace && selectedSubCategory) {
        resultTitle += " | ".concat(selectedSubCategory.title, " \u05D1").concat(selectedPlace.heName);
      }

      return resultTitle;
    }
  }, {
    key: "getBreadcrumbsData",
    value: function getBreadcrumbsData() {
      var _this$props2 = this.props,
          selectedPlace = _this$props2.selectedPlace,
          selectedSubCategory = _this$props2.selectedSubCategory;
      var items = [];
      if (!selectedSubCategory || !selectedPlace) return items;
      console.log(selectedPlace);

      if (selectedPlace.country && typeof selectedPlace.country === 'object') {
        items.push({
          title: selectedPlace.country.heName,
          link: Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_14__["buildPlaceUrl"])(selectedPlace.country),
          placeObject: selectedPlace.country
        });
      }

      items.push({
        title: selectedPlace.heame,
        link: Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_14__["buildPlaceUrl"])(selectedPlace),
        placeObject: selectedPlace
      });
      items.push({
        title: selectedSubCategory.title,
        isHighlighted: true
      });
      console.log(items); // return [];

      return items;
    }
  }, {
    key: "render",
    value: function render() {
      var pageTitle = this.getPageTitle() || '';
      return __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "search-results-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(_components_Content__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, pageTitle && __jsx(_components__WEBPACK_IMPORTED_MODULE_15__["FancyTitle"], {
        highlightedTitle: pageTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), __jsx(_components__WEBPACK_IMPORTED_MODULE_15__["Breadcrumbs"], {
        items: this.getBreadcrumbsData(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), __jsx(_components_SubCategoryPicker__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), __jsx("div", {
        className: "spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx(_components_BusinessListView__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }))));
    }
  }]);

  return SearchResultsPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var SearchReducer = _ref.SearchReducer;
  var isLoading = SearchReducer.isLoading,
      selectedPlace = SearchReducer.selectedPlace,
      businessList = SearchReducer.businessList,
      selectedSubCategory = SearchReducer.selectedSubCategory,
      subCategoriesList = SearchReducer.subCategoriesList;
  return {
    isLoading: isLoading,
    selectedPlace: selectedPlace,
    businessList: businessList,
    selectedSubCategory: selectedSubCategory,
    subCategoriesList: subCategoriesList
  };
};

var mapDispatchToProps = {
  searchBySubCategory: _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_11__["searchBySubCategory"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(SearchResultsPage));

/***/ })

})
//# sourceMappingURL=[subCategoryId].js.6d10a2dadb0bed06d4fc.hot-update.js.map