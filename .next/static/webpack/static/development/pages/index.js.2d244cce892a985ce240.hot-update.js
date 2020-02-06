webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/reducers/Search/actions.js":
/*!****************************************!*\
  !*** ./src/reducers/Search/actions.js ***!
  \****************************************/
/*! exports provided: getCountries, getPlaceDetails, setSearchModalState, searchQuery, navigateSearchBySubCategory, searchBySubCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountries", function() { return getCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaceDetails", function() { return getPlaceDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchModalState", function() { return setSearchModalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchQuery", function() { return searchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateSearchBySubCategory", function() { return navigateSearchBySubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBySubCategory", function() { return searchBySubCategory; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _services_requestService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/requestService */ "./src/services/requestService.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types */ "./src/reducers/Search/types.js");
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/urlBuilderService */ "./src/services/urlBuilderService.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





var getCountries = function getCountries() {
  return function _callee(dispatch) {
    var res, payload;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(Object(_services_requestService__WEBPACK_IMPORTED_MODULE_9__["getRequest"])('/placements/getPlacementsData'));

          case 2:
            res = _context.sent;
            payload = _objectSpread({
              isLoading: false
            }, res.data);
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_10__["SET_COUNTRIES"],
              payload: payload
            });
            return _context.abrupt("return", payload);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};
var getPlaceDetails = function getPlaceDetails(placeId) {
  return function _callee2(dispatch) {
    var res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(Object(_services_requestService__WEBPACK_IMPORTED_MODULE_9__["getRequest"])("/placements/getPlaceDetails?placeId=".concat(placeId)));

          case 2:
            res = _context2.sent;
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_10__["SET_PLACE_DETAILS"],
              payload: _objectSpread({
                isLoading: false
              }, res.data)
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};
function setSearchModalState(isSearchOpen) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_10__["SET_MODAL_STATE"],
    payload: {
      isSearchOpen: isSearchOpen
    }
  };
}
var searchQuery = function searchQuery() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function _callee3(dispatch) {
    var firstPayload, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            firstPayload = {
              isSearchLoading: true,
              query: query
            };

            if (!query) {
              firstPayload.autocompleteList = [];
              firstPayload.isSearchLoading = false;
            }

            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_10__["SEARCH_QUERY"],
              payload: firstPayload
            });

            if (!query) {
              _context3.next = 8;
              break;
            }

            _context3.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(Object(_services_requestService__WEBPACK_IMPORTED_MODULE_9__["getRequest"])("webSearch/searchByQuery?query=".concat(query)));

          case 6:
            res = _context3.sent;
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_10__["SEARCH_QUERY"],
              payload: {
                autocompleteList: res.data,
                isSearchLoading: false
              }
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};
var navigateSearchBySubCategory = function navigateSearchBySubCategory(selectedPlace, subCategory) {
  return function _callee4(dispatch) {
    var targetUrl;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            targetUrl = Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_11__["buildSearchUrl"])({
              placeId: selectedPlace._id,
              subCategoryId: subCategory._id
            });
            dispatch(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_8__["push"])(targetUrl));
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_10__["SEARCH_SUB_CATEGORY"],
              payload: {
                isLoading: true,
                selectedSubCategory: subCategory
              }
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    });
  };
};
var searchBySubCategory = function searchBySubCategory(placeId, subCategoryId) {
  return function _callee5(dispatch) {
    var res, payload;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_10__["SEARCH_SUB_CATEGORY"],
              payload: {
                isLoading: true
              }
            });
            _context5.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(Object(_services_requestService__WEBPACK_IMPORTED_MODULE_9__["getRequest"])("webSearch/searchBySubCategory?placeId=".concat(placeId, "&subCategoryId=").concat(subCategoryId)));

          case 3:
            res = _context5.sent;
            payload = _objectSpread({
              isLoading: false
            }, res.data);
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_10__["SEARCH_SUB_CATEGORY"],
              payload: payload
            });
            return _context5.abrupt("return", payload);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    });
  };
};

/***/ })

})
//# sourceMappingURL=index.js.2d244cce892a985ce240.hot-update.js.map