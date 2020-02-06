webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/services/urlBuilderService.js":
/*!*******************************************!*\
  !*** ./src/services/urlBuilderService.js ***!
  \*******************************************/
/*! exports provided: buildPlaceUrl, buildSearchUrl, buildBusinessUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPlaceUrl", function() { return buildPlaceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSearchUrl", function() { return buildSearchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildBusinessUrl", function() { return buildBusinessUrl; });
var buildPlaceUrl = function buildPlaceUrl(place) {
  var _id = place._id,
      friendlyUrl = place.friendlyUrl,
      heName = place.heName,
      enName = place.enName;
  return "/place/".concat(_id, "/").concat(friendlyUrl || heName || enName);
};
/**
 *
 * @param {placeId: string, subCategoryId: string} searchConfig
 */

var buildSearchUrl = function buildSearchUrl(searchConfig) {
  var placeId = searchConfig.placeId,
      subCategoryId = searchConfig.subCategoryId;
  return "/search/".concat(placeId, "/").concat(subCategoryId);
};
var buildBusinessUrl = function buildBusinessUrl(business) {
  var friendlyUrl = business.friendlyUrl,
      _id = business._id,
      englishName = business.englishName;
  return "/business/".concat(_id, "/").concat(friendlyUrl || englishName || '');
};

/***/ })

})
//# sourceMappingURL=_app.js.d4aefae5315e159bde3a.hot-update.js.map