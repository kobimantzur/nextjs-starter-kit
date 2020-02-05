webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/services/commonService.js":
/*!***************************************!*\
  !*** ./src/services/commonService.js ***!
  \***************************************/
/*! exports provided: isMobile, setCookie, getCookie, getFriendlyTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyTime", function() { return getFriendlyTime; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


var isMobile = function isMobile() {
  return false;
  if (!navigator) return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
var setCookie = function setCookie(name, value, days) {
  var expires = '';

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=".concat(date.toUTCString());
  }

  document.cookie = "".concat(name, "=").concat(value || '').concat(expires, "; path=/");
};
var getCookie = function getCookie(name) {
  var nameEQ = "".concat(name, "=");
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
};
var getFriendlyTime = function getFriendlyTime(date) {
  if (!date) {
    return '';
  }

  var parsedDate = new Date(JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date))));
  var delta = Math.round((+new Date() - parsedDate) / 1000);
  var minute = 60;
  var hour = minute * 60;
  var day = hour * 24;
  var fuzzy;

  if (delta < 30) {
    fuzzy = 'הרגע';
  } else if (delta < minute) {
    fuzzy = "\u05DC\u05E4\u05E0\u05D9 ".concat(delta, " \u05E9\u05E0\u05D9\u05D5\u05EA");
  } else if (delta < 2 * minute) {
    fuzzy = 'לפני כדקה';
  } else if (delta < hour) {
    fuzzy = "\u05DC\u05E4\u05E0\u05D9 ".concat(Math.floor(delta / minute), " \u05D3\u05E7\u05D5\u05EA");
  } else if (Math.floor(delta / hour) === 1) {
    fuzzy = 'לפני כשעה';
  } else if (delta < day) {
    fuzzy = "\u05DC\u05E4\u05E0\u05D9 ".concat(Math.floor(delta / hour), " \u05E9\u05E2\u05D5\u05EA");
  } else if (delta < day * 2) {
    fuzzy = 'אתמול';
  } else {
    fuzzy = moment__WEBPACK_IMPORTED_MODULE_1___default()(parsedDate).format('DD/MM/YYYY');
  }

  return fuzzy;
};

/***/ })

})
//# sourceMappingURL=_app.js.a5ab62a52ce077beef8b.hot-update.js.map