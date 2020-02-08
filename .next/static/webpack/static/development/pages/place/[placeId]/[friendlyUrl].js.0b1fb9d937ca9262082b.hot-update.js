webpackHotUpdate("static/development/pages/place/[placeId]/[friendlyUrl].js",{

/***/ "./src/containers/PlacePage/index.js":
/*!*******************************************!*\
  !*** ./src/containers/PlacePage/index.js ***!
  \*******************************************/
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/containers/PlacePage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
/* harmony import */ var _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../reducers/Search/actions */ "./src/reducers/Search/actions.js");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components */ "./src/containers/PlacePage/Components/index.js");
/* harmony import */ var _components_SubCategoryPicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/SubCategoryPicker */ "./src/components/SubCategoryPicker/index.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Content */ "./src/components/Content/index.js");
/* harmony import */ var _components_FancyTitle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/FancyTitle */ "./src/components/FancyTitle/index.js");
/* harmony import */ var _components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Breadcrumbs */ "./src/components/Breadcrumbs/index.js");
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/urlBuilderService */ "./src/services/urlBuilderService.js");






var _jsxFileName = "/Users/kobimantzur/mapo/hello-next/src/containers/PlacePage/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;














var PlacePage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PlacePage, _Component);

  function PlacePage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PlacePage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PlacePage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PlacePage, [{
    key: "componentDidUpdate",
    // componentDidMount() {
    //   const { match } = this.props;
    //   const { placeId } = match.params;
    //   if (!placeId) return this.props.push('/');
    //   this.props.getPlaceDetails(placeId);
    // }
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        var match = this.props.match;
        var placeId = match.params.placeId;
        if (!placeId) return this.props.push('/');
        this.props.getPlaceDetails(placeId);
      }
    }
  }, {
    key: "getBreadcrumbsData",
    value: function getBreadcrumbsData() {
      var selectedPlace = this.props.selectedPlace;
      var items = [];
      console.log(selectedPlace);

      if (selectedPlace && selectedPlace.country) {
        items.push({
          title: selectedPlace.country.heName,
          link: Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_18__["buildPlaceUrl"])(selectedPlace.country),
          placeObject: selectedPlace.country
        });
      }

      items.push({
        title: selectedPlace.heName,
        isHighlighted: true
      });
      return items;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selectedPlace = _this$props.selectedPlace,
          isLoading = _this$props.isLoading;
      var highlightedTitle = '';

      if (selectedPlace) {
        highlightedTitle = "".concat(selectedPlace.heName); // if (selectedPlace.country && typeof selectedPlace.country === 'object') {
        //   highlightedTitle += `, ${selectedPlace.country.heName}`;
        // }
      }

      return __jsx(_components__WEBPACK_IMPORTED_MODULE_11__["Page"], {
        className: "place-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, isLoading && __jsx(_components__WEBPACK_IMPORTED_MODULE_11__["AppSpinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), !isLoading && __jsx(_components_Content__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, selectedPlace && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_components_FancyTitle__WEBPACK_IMPORTED_MODULE_16__["default"], {
        highlightedTitle: "".concat(highlightedTitle, "."),
        regularTitle: "\u05DB\u05DC \u05DE\u05D4 \u05E9\u05E8\u05E6\u05D9\u05EA\u05DD \u05DC\u05D3\u05E2\u05EA \u05E2\u05DC",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx(_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_17__["default"], {
        items: this.getBreadcrumbsData(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), __jsx(_components_SubCategoryPicker__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), __jsx(_Components__WEBPACK_IMPORTED_MODULE_13__["InfoCards"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), __jsx(_Components__WEBPACK_IMPORTED_MODULE_13__["CitiesPicker"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }))));
    }
  }]);

  return PlacePage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var SearchReducer = _ref.SearchReducer;
  var isLoading = SearchReducer.isLoading,
      selectedPlace = SearchReducer.selectedPlace,
      citiesList = SearchReducer.citiesList,
      subCategoriesList = SearchReducer.subCategoriesList;
  return {
    isLoading: isLoading,
    selectedPlace: selectedPlace,
    citiesList: citiesList,
    subCategoriesList: subCategoriesList
  };
};

var mapDispatchToProps = {
  getPlaceDetails: _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_12__["getPlaceDetails"],
  push: connected_react_router__WEBPACK_IMPORTED_MODULE_10__["push"],
  navigateSearchBySubCategory: _reducers_Search_actions__WEBPACK_IMPORTED_MODULE_12__["navigateSearchBySubCategory"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(PlacePage));

/***/ })

})
//# sourceMappingURL=[friendlyUrl].js.0b1fb9d937ca9262082b.hot-update.js.map