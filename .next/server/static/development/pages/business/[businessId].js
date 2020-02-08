module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/business/[businessId].js":
/*!****************************************!*\
  !*** ./pages/business/[businessId].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_containers_BusinessPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/containers/BusinessPage */ "./src/containers/BusinessPage/index.js");
/* harmony import */ var _src_reducers_BusinessPage_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/reducers/BusinessPage/actions */ "./src/reducers/BusinessPage/actions.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/constants */ "./src/constants.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class Business extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps({
    store,
    isServer,
    pathname,
    query,
    ctx,
    res
  }) {
    res.redirect('/');
  }

  getPageTitle() {
    const {
      business
    } = this.props;

    if (!business.englishName) {
      // TODO: report analytics
      return _src_constants__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_PAGE_TITLE"];
    }

    return `Mapo | המלצה על ${business.subCategories[0].title} ב${business.placements[0].heName} - ${business.englishName}`;
  }

  getMetaImage() {
    const {
      business
    } = this.props;
    if (!business) return '';
    return business.logoUrl;
  }

  getMetaDescription() {
    const {
      business
    } = this.props;
    if (!business) return null;

    try {
      return `${business.description.slice(0, 130)}`;
    } catch (e) {
      return '';
    }
  }

  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", {
      key: "title"
    }, this.getPageTitle()), __jsx("meta", {
      property: "description",
      key: "description",
      content: this.getMetaDescription()
    }), __jsx("meta", {
      property: "og:title",
      key: "og:title",
      content: this.getPageTitle()
    }), __jsx("meta", {
      property: "og:image",
      key: "og:image",
      content: this.getMetaImage()
    }), __jsx("meta", {
      property: "og:image:alt",
      key: "og:image:alt",
      content: this.getPageTitle()
    }), __jsx("meta", {
      property: "og:description",
      key: "og:description",
      content: this.getMetaDescription()
    })), __jsx(_src_containers_BusinessPage__WEBPACK_IMPORTED_MODULE_3__["default"], this.props));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Business);

/***/ }),

/***/ "./src/components/AppSpinner/index.js":
/*!********************************************!*\
  !*** ./src/components/AppSpinner/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppSpinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/AppSpinner/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AppSpinner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "app-spinner"
    }, __jsx("img", {
      src: "/static/img/logos/icon-blue.svg",
      className: "app-icon"
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "loading",
      spin: true
    }));
  }

}

/***/ }),

/***/ "./src/components/AppSpinner/index.scss":
/*!**********************************************!*\
  !*** ./src/components/AppSpinner/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Breadcrumbs/index.js":
/*!*********************************************!*\
  !*** ./src/components/Breadcrumbs/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Breadcrumbs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/Breadcrumbs/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/urlBuilderService */ "./src/services/urlBuilderService.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { Link } from 'react-router-dom';



class Breadcrumbs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onClick", link => {// link && this.props.push(link);
      // TODO: report GA
    });
  }

  render() {
    const {
      items
    } = this.props;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
      className: "breadcrumbs"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
      href: "/"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "home"
    }), __jsx("span", null, "\u05E8\u05D0\u05E9\u05D9")), items.map((item, index) => {
      const additionalProps = {};

      if (item.link) {
        additionalProps.onClick = () => {// this.props.push(item.link);
          // TODO: report GA
        };
      } else {
        additionalProps.className = 'disabled';
      }

      if (item.isHighlighted) {
        additionalProps.className = additionalProps.className ? `${additionalProps.className} highlighted` : 'highlighted';
      }

      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, _extends({}, additionalProps, {
        onClick: () => this.onClick(item.link),
        key: index
      }), !item.isHighlighted && item.placeObject && item.subCategoryObject && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_4__["buildSearchUrl"])({
          placeId: item.placeObject._id,
          subCategoryId: item.subCategoryObject._id
        })
      }, __jsx("a", null, item.title)), !item.isHighlighted && item.placeObject && !item.subCategoryObject && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_4__["buildPlaceUrl"])(item.placeObject)
      }, __jsx("a", null, item.title)), (item.isHighlighted || !item.placeObject && !item.subCategoryObject) && __jsx("span", null, item.title));
    }));
  }

}

/***/ }),

/***/ "./src/components/Breadcrumbs/index.scss":
/*!***********************************************!*\
  !*** ./src/components/Breadcrumbs/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/CardWrap/index.js":
/*!******************************************!*\
  !*** ./src/components/CardWrap/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardWrap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/CardWrap/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



class CardWrap extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      className
    } = this.props;
    return __jsx("div", _extends({}, this.props, {
      className: `card-wrap ${className || ''}`
    }), this.props.children);
  }

}

/***/ }),

/***/ "./src/components/CardWrap/index.scss":
/*!********************************************!*\
  !*** ./src/components/CardWrap/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Content/index.js":
/*!*****************************************!*\
  !*** ./src/components/Content/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/Content/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Content extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "content"
    }, this.props.children);
  }

}

/***/ }),

/***/ "./src/components/Content/index.scss":
/*!*******************************************!*\
  !*** ./src/components/Content/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/FancyTitle/index.js":
/*!********************************************!*\
  !*** ./src/components/FancyTitle/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FancyTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/FancyTitle/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class FancyTitle extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      highlightedTitle,
      regularTitle
    } = this.props;
    return __jsx("div", {
      className: "fancy-title"
    }, __jsx("h1", null, regularTitle && __jsx("span", {
      className: "regular-title"
    }, regularTitle), highlightedTitle), __jsx("div", {
      className: "header-color"
    }));
  }

}
FancyTitle.propTypes = {
  highlightedTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  regularTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
FancyTitle.defaultProps = {
  highlightedTitle: '',
  regularTitle: ''
};

/***/ }),

/***/ "./src/components/FancyTitle/index.scss":
/*!**********************************************!*\
  !*** ./src/components/FancyTitle/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Page/index.js":
/*!**************************************!*\
  !*** ./src/components/Page/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/components/Page/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  Content
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      className
    } = this.props;
    return __jsx(Content, {
      className: `page ${className || ''}`
    }, __jsx("div", {
      className: "header-opacity"
    }), this.props.children);
  }

}

/***/ }),

/***/ "./src/components/Page/index.scss":
/*!****************************************!*\
  !*** ./src/components/Page/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/UserInfo/index.js":
/*!******************************************!*\
  !*** ./src/components/UserInfo/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/components/UserInfo/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const defaultAvatar = __webpack_require__(/*! ../../img/user-avatar.png */ "./src/img/user-avatar.png");

class UserInfo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      userDetails,
      additionalSecondaryTitle
    } = this.props;
    if (!userDetails || !userDetails.firstName) return null;
    const userImage = userDetails.profilePictureUrl || defaultAvatar;
    const userName = `${userDetails.firstName} ${userDetails.lastName}`;
    let secondaryTitle = userDetails.headline || '';
    secondaryTitle += secondaryTitle && additionalSecondaryTitle ? ' | ' : '';
    secondaryTitle += additionalSecondaryTitle || '';
    return __jsx("div", {
      className: "user-info"
    }, __jsx("div", {
      className: "avatar-wrapper"
    }, __jsx("img", {
      src: userImage,
      className: "avatar",
      alt: userName
    })), __jsx("div", {
      className: "user-details"
    }, __jsx("p", {
      className: "name"
    }, `${userDetails.firstName} ${userDetails.lastName}`), secondaryTitle && __jsx("p", {
      className: "headline"
    }, secondaryTitle)));
  }

}
UserInfo.propTypes = {
  // userDetails: PropTypes.object,
  additionalSecondaryTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
UserInfo.defaultProps = {
  // userDetails: undefined,
  additionalSecondaryTitle: ''
};

/***/ }),

/***/ "./src/components/UserInfo/index.scss":
/*!********************************************!*\
  !*** ./src/components/UserInfo/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: FancyTitle, Content, Page, AppSpinner, CardWrap, UserInfo, Breadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FancyTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FancyTitle */ "./src/components/FancyTitle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FancyTitle", function() { return _FancyTitle__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content */ "./src/components/Content/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return _Content__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ "./src/components/Page/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _Page__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _AppSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppSpinner */ "./src/components/AppSpinner/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSpinner", function() { return _AppSpinner__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _CardWrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardWrap */ "./src/components/CardWrap/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardWrap", function() { return _CardWrap__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserInfo */ "./src/components/UserInfo/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return _UserInfo__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/components/Breadcrumbs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _Breadcrumbs__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: BASE_API, PALETTE_GRAY, PALETTE_PRIMARY, GOOGLE_API_KEY, DEFAULT_PAGE_TITLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_API", function() { return BASE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PALETTE_GRAY", function() { return PALETTE_GRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PALETTE_PRIMARY", function() { return PALETTE_PRIMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_API_KEY", function() { return GOOGLE_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGE_TITLE", function() { return DEFAULT_PAGE_TITLE; });
const BASE_API = false ? undefined : 'http://localhost:2000/api/'; // export const BASE_API = 'http://localhost:2000/api/';

const PALETTE_GRAY = '#424242';
const PALETTE_PRIMARY = '#5e97c7';
const GOOGLE_API_KEY = 'AIzaSyAmkvMrCjGlSfdJppOEl4f5tyAqpmsmNv0';
const DEFAULT_PAGE_TITLE = 'Mapo | ישראלים מטיילים בחו״ל';

/***/ }),

/***/ "./src/containers/BusinessPage/Components/Gallery/index.js":
/*!*****************************************************************!*\
  !*** ./src/containers/BusinessPage/Components/Gallery/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BusinessGallery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-gallery */ "react-grid-gallery");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_gallery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CardWrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/CardWrap */ "./src/components/CardWrap/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/containers/BusinessPage/Components/Gallery/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class BusinessGallery extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      business
    } = this.props;
    if (!business) return null;
    const photos = [];

    if (business.logoUrl) {
      photos.push({
        src: business.logoUrl,
        thumbnail: business.logoUrl,
        // thumbnailWidth: 'auto',
        thumbnailHeight: '300',
        isSelected: true // caption: 'After Rain (Jeshu John - designerspics.com)',

      });
    }

    return __jsx(_components_CardWrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "gallery"
    }, __jsx(react_grid_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {
      images: photos,
      enableImageSelection: false,
      rowHeight: 300
    }));
  }

}

/***/ }),

/***/ "./src/containers/BusinessPage/Components/Gallery/index.scss":
/*!*******************************************************************!*\
  !*** ./src/containers/BusinessPage/Components/Gallery/index.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/containers/BusinessPage/Components/Map/index.js":
/*!*************************************************************!*\
  !*** ./src/containers/BusinessPage/Components/Map/index.js ***!
  \*************************************************************/
/*! exports provided: DEF_PROPS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEF_PROPS", function() { return DEF_PROPS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _components_CardWrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/CardWrap */ "./src/components/CardWrap/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DEF_PROPS = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${_constants__WEBPACK_IMPORTED_MODULE_2__["GOOGLE_API_KEY"]}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: __jsx("div", {
    style: {
      height: '100%'
    }
  }),
  containerElement: __jsx("div", {
    style: {
      height: '400px'
    }
  }),
  mapElement: __jsx("div", {
    style: {
      height: '100%'
    }
  })
};
const MyMapComponent = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])((props = DEF_PROPS) => {
  if (!props.location || props.location.length === 0) return null;
  const lat = parseFloat(props.location[0]);
  const lng = parseFloat(props.location[1]);
  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
    defaultZoom: 16,
    defaultCenter: {
      lat,
      lng
    }
  }, props.isMarkerShown && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    position: {
      lat,
      lng
    }
  }));
}));
/* harmony default export */ __webpack_exports__["default"] = (MyMapComponent);

/***/ }),

/***/ "./src/containers/BusinessPage/Components/ShareButtons/index.js":
/*!**********************************************************************!*\
  !*** ./src/containers/BusinessPage/Components/ShareButtons/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/containers/BusinessPage/Components/ShareButtons/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_urlBuilderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/urlBuilderService */ "./src/services/urlBuilderService.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ShareButtons extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onClick", type => {
      const {
        business
      } = this.props; // const { friendlyUrl } = business;

      const shareTitle = 'המלצה על אטרקציות בברלין - אלכסנדרפלץ';
      const sharableUrl = `https://www.mymapo.com${Object(_services_urlBuilderService__WEBPACK_IMPORTED_MODULE_2__["buildBusinessUrl"])(business)}`;

      switch (type) {
        case 'facebook':
          window.open(`https://www.facebook.com/sharer.php?u=${sharableUrl}`);
          break;

        case 'whatsapp':
          // window.open(`whatsapp://send?text=${shareTitle}\n${encodeURIComponent(sharableUrl)}`);
          window.open(`whatsapp://send?text=${encodeURIComponent(sharableUrl)}`);
          break;

        case 'twitter':
          window.open(`http://twitter.com/share?url=${sharableUrl}&hashtags=Mapo&text=${shareTitle}`);
          break;

        case 'clipboard':
          this.copyToClipboard(`${shareTitle}\n ${sharableUrl}`);
          break;

        default:
          break;
      }
    });
  }

  render() {
    return __jsx("div", {
      className: "share-buttons"
    }, __jsx("i", {
      className: "fab fa-facebook-square fb",
      onClick: () => this.onClick('facebook')
    }), __jsx("i", {
      className: "fab fa-whatsapp wa",
      onClick: () => this.onClick('whatsapp')
    }), __jsx("i", {
      className: "fab fa-twitter tw",
      onClick: () => this.onClick('twitter')
    }));
  }

}

/***/ }),

/***/ "./src/containers/BusinessPage/Components/ShareButtons/index.scss":
/*!************************************************************************!*\
  !*** ./src/containers/BusinessPage/Components/ShareButtons/index.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/containers/BusinessPage/Components/Tags/index.js":
/*!**************************************************************!*\
  !*** ./src/containers/BusinessPage/Components/Tags/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/containers/BusinessPage/Components/Tags/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Tags extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  getTags(business) {
    const {
      subCategoryFilters,
      subCategories
    } = business;
    const tags = [];

    if (subCategories && subCategories.length > 0) {
      subCategories.map(subCategory => {
        tags.push({
          key: subCategory._id,
          value: subCategory.title
        });
        return subCategory;
      });
    }

    if (subCategoryFilters && subCategoryFilters.length > 0) {
      subCategoryFilters.map(subCategoryFilter => {
        tags.push({
          key: subCategoryFilter._id,
          value: subCategoryFilter.title
        });
        return subCategoryFilter;
      });
    }

    return tags;
  }

  render() {
    const {
      business
    } = this.props;
    if (!business) return null;
    return __jsx("div", {
      className: "tags"
    }, this.getTags(business).map(tag => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
      key: tag.key
    }, tag.value)));
  }

}

/***/ }),

/***/ "./src/containers/BusinessPage/Components/Tags/index.scss":
/*!****************************************************************!*\
  !*** ./src/containers/BusinessPage/Components/Tags/index.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/containers/BusinessPage/Components/index.js":
/*!*********************************************************!*\
  !*** ./src/containers/BusinessPage/Components/index.js ***!
  \*********************************************************/
/*! exports provided: ShareButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShareButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShareButtons */ "./src/containers/BusinessPage/Components/ShareButtons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShareButtons", function() { return _ShareButtons__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/containers/BusinessPage/index.js":
/*!**********************************************!*\
  !*** ./src/containers/BusinessPage/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_commonService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/commonService */ "./src/services/commonService.js");
/* harmony import */ var _reducers_BusinessPage_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/BusinessPage/actions */ "./src/reducers/BusinessPage/actions.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.scss */ "./src/containers/BusinessPage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_mail_icon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/mail-icon.png */ "./src/img/mail-icon.png");
/* harmony import */ var _img_mail_icon_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_mail_icon_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components */ "./src/containers/BusinessPage/Components/index.js");
/* harmony import */ var _Components_Map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/Map */ "./src/containers/BusinessPage/Components/Map/index.js");
/* harmony import */ var _Components_Gallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/Gallery */ "./src/containers/BusinessPage/Components/Gallery/index.js");
/* harmony import */ var _services_analyticsService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/analyticsService */ "./src/services/analyticsService.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
/* harmony import */ var _components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Breadcrumbs */ "./src/components/Breadcrumbs/index.js");
/* harmony import */ var _Components_Tags__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/Tags */ "./src/containers/BusinessPage/Components/Tags/index.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/Page */ "./src/components/Page/index.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/Content */ "./src/components/Content/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















 // const { Content } = Layout;

const daysList = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
const propTypes = {
  business: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  getBusinessByFriendlyUrl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
const defaultProps = {
  business: undefined,
  getBusinessByFriendlyUrl: underscore__WEBPACK_IMPORTED_MODULE_1___default.a.noop,
  isLoading: true
};

class BusinessPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onModalStateChange", s => {
      this.props.setReviewModalState(s);
    });

    _defineProperty(this, "formatPhoneNumber", s => {
      const s2 = `${s}`.replace(/\D/g, '');
      const m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
      return !m ? null : `(${m[1]}) ${m[2]}-${m[3]}`;
    });

    _defineProperty(this, "formatTime", time => {
      const parsedTime = new Date(JSON.parse(JSON.stringify(new Date(time))));

      if (parsedTime) {
        const hours = parsedTime.getHours() < 10 ? `0${parsedTime.getHours()}` : parsedTime.getHours();
        const minutes = parsedTime.getMinutes() < 10 ? `0${parsedTime.getMinutes()}` : parsedTime.getMinutes();
        return `${hours}:${minutes}`;
      }

      return '';
    });

    _defineProperty(this, "renderInfoSection", () => {
      return null;
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        className: "info-wrapper"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        span: 12,
        push: 12
      }, __jsx("div", {
        className: "info-item"
      }, __jsx("h1", null, "\u05D1\u05E2\u05DC \u05E2\u05E1\u05E7?"), __jsx("p", null, "\u05DE\u05D7\u05E4\u05E9 \u05DC\u05E7\u05D3\u05DD \u05D0\u05EA \u05D4\u05E2\u05E1\u05E7 \u05E9\u05DC\u05DA?", __jsx("br", null), "\u05D0\u05E6\u05DC\u05E0\u05D5 \u05EA\u05E7\u05D1\u05DC \u05D4\u05D6\u05D3\u05DE\u05E0\u05D5\u05EA \u05DC\u05D7\u05E9\u05D9\u05E4\u05D4 \u05E2\u05E0\u05E7\u05D9\u05EA \u05D5\u05E4\u05E8\u05E1\u05D5\u05DD \u05DC\u05D1\u05D9\u05EA \u05D4\u05E2\u05E1\u05E7 \u05E9\u05DC\u05DA."))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        span: 12,
        pull: 12
      }, __jsx("div", {
        className: "info-item"
      }, __jsx("h1", null, "\u05DE\u05D4 \u05D6\u05D4 Mapo?"), __jsx("p", null, `עברת ללוס אנג'לס?

מחפש רופא? או אולי עורך דין טוב? הקושי של השפה מקשה עלייך?

אתה לא לבד! `, __jsx("br", null), `בשביל זה אנחנו פה.

אנחנו בMapo דואגים לספק לך את כל העסקים

ונותני השירות הישראלים.`))));
    });

    this.state = {
      isMobile: false
    };
  } // componentWillMount() {
  //   const { friendlyUrl } = this.props.match.params;
  //   if (!friendlyUrl) {
  //     window.location.href = 'https://mymapo.com';
  //     // this.props.setEmptyState();
  //   } else {
  //     this.props.getBusinessByFriendlyUrl(friendlyUrl);
  //   }
  // }


  componentWillUnmount() {
    this.props.cleanBusinessPage();
  }

  componentDidMount() {
    Object(_services_analyticsService__WEBPACK_IMPORTED_MODULE_15__["reportScreen"])(location.pathname);
  }

  // eslint-disable-next-line class-methods-use-this
  getPlaceName(business) {
    if (!business.placements || business.placements.length === 0) return null;
    if (!business.subCategories || business.subCategories.length === 0) return null;
    const title = `${business.subCategories[0].title} ב${business.placements[0].heName} -`; // if (business.placements[0].country) {
    //   title += `, ${business.placements[0].country.heName}`;
    // }

    return title;
  }

  getLocationTitle(business) {
    if (!business || !business.placements || business.placements.length === 0) return '';
    const locationName = business.placements[0].heName; // if (business.placements[0].country) {
    //   locationName += `, <b>${business.placements[0].country.heName}</b>`;
    // }

    return __jsx("div", {
      className: "address"
    }, __jsx("b", null, locationName, ", "), business.placements[0].country && business.placements[0].country.heName);
  }

  renderBusinessHeader() {
    const {
      business
    } = this.props;
    if (!business) return null;
    const {
      englishName,
      subSubCategory,
      description
    } = business;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      className: "business-header"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "right"
    }, __jsx("div", {
      className: "description"
    }, description)), __jsx("div", {
      className: "left"
    }, __jsx("h4", {
      className: "sub-category"
    }, subSubCategory))));
  }

  renderBusinessBody() {
    const {
      business: {
        address,
        phoneNumber,
        facebookName,
        instagramName,
        websiteUrl,
        email,
        scale1,
        location
      }
    } = this.props;
    return __jsx("div", {
      className: "business-body"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      className: "right",
      span: 8,
      push: 16
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      className: "left",
      span: 10,
      pull: 8
    }, __jsx("p", {
      className: "phone-number"
    }, this.formatPhoneNumber(phoneNumber)), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: "social"
    }, websiteUrl && __jsx("a", {
      className: "website-link",
      href: websiteUrl
    }, "website"), facebookName && __jsx("a", {
      target: "_blank",
      className: "facebook",
      href: `https://facebook.com/${facebookName}`
    }, __jsx("img", {
      src: "/static/img/facebook-icon.png",
      alt: facebookName
    })), instagramName && __jsx("a", {
      target: "_blank",
      className: "instagram",
      href: `https://instagram.com/${instagramName}`
    }, __jsx("img", {
      src: "/static/img/instagram-icon.png",
      alt: instagramName
    })), email && __jsx("a", {
      className: "mail",
      href: `mailto:${email}`
    }, __jsx("img", {
      src: _img_mail_icon_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      alt: email
    }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], null));
  }

  renderBusinessHours() {
    const {
      business: {
        businessHours
      }
    } = this.props;
    if (!businessHours) return null;
    const businessHoursObj = JSON.parse(businessHours);
    return __jsx("div", {
      className: "business-hours"
    }, __jsx("h1", null, "\u05E9\u05E2\u05D5\u05EA \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA"), businessHoursObj.map((day, i) => __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      key: `day${i}`,
      className: "hour-row"
    }, day.length > 0 && day.map((hour, i = j) => __jsx("span", {
      key: `day${i}-hour${hour}`,
      className: "hour"
    }, `${(i > 0 ? ', ' : '') + this.formatTime(hour.start)}-${this.formatTime(hour.end)}`)), day.length === 0 && __jsx("span", {
      className: "hour"
    }, "\u05E1\u05D2\u05D5\u05E8"), __jsx("span", {
      className: "day"
    }, daysList[i]))));
  }

  renderLoader() {
    return __jsx(_components_Content__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: "business-page loader"
    }, __jsx(_components__WEBPACK_IMPORTED_MODULE_16__["AppSpinner"], null));
  }

  renderEmptyState() {
    return __jsx(_components_Content__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: "business-page"
    }, __jsx("h1", {
      className: "general-title"
    }, "\u05DE\u05D8\u05D9\u05D9\u05DC\u05D9\u05DD \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9\u05DD \u05D1\u05D7\u05D5\u05F4\u05DC"), this.renderInfoSection());
  }

  render() {
    const {
      isLoading,
      business,
      isReviewModalOpen
    } = this.props;
    if (isLoading) return this.renderLoader();
    if (!isLoading && !business) return this.renderEmptyState();
    return __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_19__["default"], {
      className: "business-page"
    }, __jsx(_components_Content__WEBPACK_IMPORTED_MODULE_20__["default"], null, __jsx(_components__WEBPACK_IMPORTED_MODULE_16__["FancyTitle"], {
      highlightedTitle: business.englishName,
      regularTitle: this.getPlaceName(business)
    }), __jsx(_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_17__["default"], {
      items: [{
        link: '',
        title: business.placements[0].country.heName,
        placeObject: business.placements[0].country
      }, {
        link: '',
        title: business.placements[0].heName,
        placeObject: business.placements[0]
      }, {
        link: '',
        title: business.subCategories[0].title,
        subCategoryObject: business.subCategories[0],
        placeObject: business.placements[0]
      }, {
        link: '',
        title: business.englishName,
        isHighlighted: true
      }]
    }), __jsx(_Components_Tags__WEBPACK_IMPORTED_MODULE_18__["default"], this.props), __jsx("div", {
      className: "header-color"
    }), __jsx("div", {
      className: "info-and-share"
    }, business && __jsx(_components__WEBPACK_IMPORTED_MODULE_16__["UserInfo"], {
      userDetails: business.userId,
      additionalSecondaryTitle: `${Object(_services_commonService__WEBPACK_IMPORTED_MODULE_8__["getFriendlyTime"])(business.dateCreated)}`
    }), __jsx(_Components__WEBPACK_IMPORTED_MODULE_12__["ShareButtons"], this.props)), this.renderBusinessHeader(), __jsx("div", {
      className: "cubes-row"
    }, __jsx(_Components_Gallery__WEBPACK_IMPORTED_MODULE_14__["default"], this.props), __jsx(_components__WEBPACK_IMPORTED_MODULE_16__["CardWrap"], null, __jsx("div", {
      className: "address-wrapper"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      className: "address-icon",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faMapMarker"]
    }), this.getLocationTitle(business)), business && business.address && __jsx(_Components_Map__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({
      isMarkerShown: true,
      location: business.location
    }, _Components_Map__WEBPACK_IMPORTED_MODULE_13__["DEF_PROPS"])))), this.renderInfoSection()));
  }

}

BusinessPage.propTypes = propTypes;
BusinessPage.defaultProps = defaultProps;

const mapStateToProps = ({
  BusinessPageReducer
}) => {
  const {
    business,
    isLoading,
    isReviewModalOpen,
    isReviewLoading
  } = BusinessPageReducer;
  return {
    business,
    isLoading,
    isReviewModalOpen,
    isReviewLoading
  };
};

const mapDispatchToProps = {
  getBusinessByFriendlyUrl: _reducers_BusinessPage_actions__WEBPACK_IMPORTED_MODULE_9__["getBusinessByFriendlyUrl"],
  setEmptyState: _reducers_BusinessPage_actions__WEBPACK_IMPORTED_MODULE_9__["setEmptyState"],
  submitBusinessReview: _reducers_BusinessPage_actions__WEBPACK_IMPORTED_MODULE_9__["submitBusinessReview"],
  setReviewModalState: _reducers_BusinessPage_actions__WEBPACK_IMPORTED_MODULE_9__["setReviewModalState"],
  setReviewLoadingState: _reducers_BusinessPage_actions__WEBPACK_IMPORTED_MODULE_9__["setReviewLoadingState"],
  cleanBusinessPage: _reducers_BusinessPage_actions__WEBPACK_IMPORTED_MODULE_9__["cleanBusinessPage"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(BusinessPage));

/***/ }),

/***/ "./src/containers/BusinessPage/index.scss":
/*!************************************************!*\
  !*** ./src/containers/BusinessPage/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/img/mail-icon.png":
/*!*******************************!*\
  !*** ./src/img/mail-icon.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mail-icon-a5e2351da5a3fc6fcc5d1802d1845ca9.png";

/***/ }),

/***/ "./src/img/user-avatar.png":
/*!*********************************!*\
  !*** ./src/img/user-avatar.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFDV0NBTUFBQUFMMzRIUUFBQUF0MUJNVkVWOTI5UjkyOVI5MjlTd2lIUjQ0dHl6Z20yRTFNeXdqSGgrMnRPd2lYVjgzZFowNmVXNGUyVzVlV094aFhHNmVHS3ZpbloyNk9PM2ZXaDM1TjUzNXVCNjRObTRlbU56NitaeTdlbDA2K1ovMmRLMGdHdWdwcGQ4MzlpaW9wTzdkVjYxZm1sMjUrS1h0YWk3ZDJDVHZMQ3VqbnkyZ0d1S3lzRzFnMjZGMGNpcWxvU0MxcytJenNXVXVhMmNyWit0a29CLzNOV1B3cmVhc2FOdDlmS2RxWnFsbm82bm1ZaDY1TjZOeGJ1UnY3Tjc0ZHl6aFhHbm00by9sczRrQUFBQUFuUlNUbFB4NU54VE82VUFBQVg0U1VSQlZIamE3ZHlIa3BwQUdNRHh5eTdvRnBaZVJCQkVyR2MzNTFudTN2KzVZaW96YWZDQkVHZkMvd2wrczZ6b2x2SHB3OU1EOXVFSlBXUlBEK2w2YWxrdDYyc3RDMUxMZ3RTeUlMVXNTQzBMVXN1QzFMSWd0U3hJTFF0U3k0TFVzdUF4eGxDVjdzNWlrczI1WWR1MjRYUExnZU5xWUJGbSsvWnlOaDV0d2pBOGpDNHJZbmdXSXFob3RiQ0k0NTFXbzJNM1VGemxjNjQ1bjBUcmpzRVpHRmFkbGFGNmcvSHJYRk5rRlg5UERWenRMVHFmaXNCcVlSSGtuZFlUVFZIeHo4bWE4bnptU1k2ckhsWmY2cDIzNlJEL0xvcGRjZXowd0FOV25VWDQ2VVVvTjhEdm8ybzZYZnRXSDBHcXppTGVjaHVyRlA4NVBZaWprd0Z5VldmMVZvR2crSzlSTmQ3dU9NQlZtVVY2SzFQUmNWNVV3MzJBcXlxTGVDdlQxSEYrdXNBN3dIT3N4dXJ6enJDUTZ1YlN0aWVMSUVDbFdjUWFkRjBkRjR2R1IrNEFYT1ZaakI5akhSY3VIdldhWUpIZU9NWEZvN0s1TUtBdU9JdFkvYmVBQWx5Nisyd1BVRlpObytXSEtjV2cwakh3TWNKWnhGaVpLa3hGaHhNbUlWRHcwZUtSUmpIUWxRSm5QWnhsTCtZcWhtWnVCdzRDQkdmNW01UmljR0xQQWNNRlp6bTd5UkN1b2xwa0lFQmdGdCtidUVReVhVSW1QWnoxb3VFeWlZdUhBQUZaYlBBOExNWFNRbzRBQVZuVzRrMHR4Um8rRHdCdmVpaUxYeFJjS2hsM0xIU3JIcFozME1xeDFPazVRYmRxWWJFa2RIRzV4TnBEcUM2VzlHcVdaQ2tqamxCZExLYzhLMHdZcW9ubFpPOEhNQ3V5NjJQdHRrRnBsdlhmc1I3eklWYWE4amZXZi9hQ3FQSTY5UkdxaVlYOGgvenlLZjlWcmVLRmhXNzlWejlzQm1YZkVPTGJ6OEJIKzlFOGhzeDRPR3V2UE9JU3c5bE5BcmlLaWg4THNzZGF2bDY4V3BldktGbE5WYkJxV1B0aW56M20xZ2d4WnZDTnBHNzlHMG5JajJJZDVvclh0Vys3SVdJdjUrQk5TZ2RsMWJhbHU0NWhXN29yWHQrV2J0YkFlRTloRytBSVVHa1dzUmwyaTdyMCtHZzBjMXlBQ085TWgwVVBWN29EdSs3RGxXeDZuVVdnRjFMUkNrZFI4SHA3WVJZNXVOTUJCNHJWV1lSNXMzbnVNU2VPSnp2SWg3RDZhQkhVNjB4eURvWGwrSGh0K2xBWUVlTWFhZ3FsZnh3cWJUcmlObGhWL2NLQjVaOG44WkQrSHFWbzc1MmUwK2lGZzJ5Q1hVZmRWUG4xVWFxdWVONGJCc2xUMVhlWlpiZCtudjU2bWVXNFAzbk5YMmJKSXBKM21oM2V1MU5GQ09FS29Tanp5WEcwU0RnQVZkTkZxY1NYbHVmeDV1VnpoOHVzYjNzV0FGVVBpem1TWlhpOWoxazlubGdTOU9KYmRWWUdzZ3h1WC91TDJYNjhQbXcyTDJFWXZtd09vL1ZsdGxnT0xNNXRDV2Fyem1KT3d1M2RZajhLMzdmMHpWU1VMMVBMRmJjVXhaemp5V3QwR00vNkZqY0F0SW9zWnZHa1B4dEZXOVVVcmhuSTZpL3ZCMVVlS3VMejVEL3NPNVlIT0VBSHN6S1RaeTNHMFdRcTNHSE9Va01ORkdIUzQyam0rRGFyYytWREhHNHMxMGNzM0VERnhaSVZiZjU4V0oyOCtoYjdrbmM5UjFnb01nYWxtdHI4ZGQwSERCbUVaZkgrZW1zS0djT2pxaUwwelNJeEdMa3ZpMGhlLzlEVlRFeHh5UUp0SHExNGdrZ1YxcS9mZlFlc0JiaEtWTldtMGNxM3lKMVlCSEY3M05XeU5Xc1YySVo0RHJrSGkwais2alVkWnFncU1EbkY0eVFoMVZuRXVHNU1GMmVxaXJCaCt0N3hHS25HSXF5MzJLYXlqdThXeFdJKzlpMVNoZFdYL1BIVXBmaXU2VUVhWFExU25rVU1LVW9ESGQ4NXFxYVQ3R1l4bUVVTTlwd3R1dTRLYytjemo1RlNMTUk3dW9iclNUZmRzYzlJQ1JieE82cExjVTNwZ1JqM0dBR3pDTys4dVRxdUxWMFduOGNMeUNMR1VsVmdLcmpyNGdGSGkxalhpUVpVd1orak11c1JDSXRJOXJ0R2NjM3A1bnpKK3dBVzh6Y3hyclBzSXJaRUNyT0lkeFlxeGZWSDQ5Qm5SVm5FWWwyVDRpWlN4WjZUZ2l6bWh6SEZqVVROTHBOSUlSYmgyYkZPN1ZGdDR4Y2JyWUgxNmxMY1ZQSjBZWk04RnZ6Z3QvcHdoYnpJYURFN0c2d21rdWNMdXdETG1BSFBWNnZQTHE4QWk0Y2F4VTBXZEltVXk1S1dYUmszbTNMaHVTeCtVWEN6VVJFbExJOWx2R2k0NFlKSjM4bGhaYmRvbWt1ZHp1d2NsclZTVmR4MFlzUnpXTWJleEkzbmhnbjdPNHVQRk54NDVxdVR3ekxDV0c0OHQwdWN2N0tZSFU2N2pmYzJXVXAvSHkyMjdQeUxTTTZVSjQ0bC9ZUFFyZi9yanhkYVZyRmFGcVNXQmFsbC9ZTWUvYzloRVhyUXYvajlCTHlWT0piVUxacmlBQUFBQUVsRlRrU3VRbUNDIg=="

/***/ }),

/***/ "./src/reducers/BusinessPage/actions.js":
/*!**********************************************!*\
  !*** ./src/reducers/BusinessPage/actions.js ***!
  \**********************************************/
/*! exports provided: cleanBusinessPage, setEmptyState, fetchBusinessByFriendlyUrl, getBusinessByFriendlyUrl, submitBusinessReview, setReviewModalState, setReviewLoadingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanBusinessPage", function() { return cleanBusinessPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEmptyState", function() { return setEmptyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBusinessByFriendlyUrl", function() { return fetchBusinessByFriendlyUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBusinessByFriendlyUrl", function() { return getBusinessByFriendlyUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitBusinessReview", function() { return submitBusinessReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReviewModalState", function() { return setReviewModalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReviewLoadingState", function() { return setReviewLoadingState; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/reducers/BusinessPage/constants.js");
/* harmony import */ var _services_analyticsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/analyticsService */ "./src/services/analyticsService.js");



function cleanBusinessPage() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["SET_BUSINESS"],
    payload: {
      isLoading: false,
      business: undefined
    }
  };
}
const setEmptyState = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["SET_EMPTY_STATE"]
});
const fetchBusinessByFriendlyUrl = friendlyUrl => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_constants__WEBPACK_IMPORTED_MODULE_1__["GET_BY_FRIENDLY_URL"], {
    params: {
      friendlyUrl
    }
  });
};
const getBusinessByFriendlyUrl = friendlyUrl => async dispatch => {
  const response = await fetchBusinessByFriendlyUrl(friendlyUrl);

  if (!response || !response.data) {// TODO: notify error
    // TODO: redirect
  }

  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["SET_BUSINESS"],
    payload: {
      business: response.data
    }
  });
  return {
    business: response.data
  };
};
const submitBusinessReview = data => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_constants__WEBPACK_IMPORTED_MODULE_1__["SUBMIT_BUSINESS_REVIEW_URL"], data).then(response => {
    Object(_services_analyticsService__WEBPACK_IMPORTED_MODULE_2__["reportEvent"])({
      category: 'ReviewModal',
      action: 'Complete'
    });
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["SET_REVIEWS"],
      payload: {
        reviewsList: response.data.reviewsList,
        userReview: response.data.userReview
      }
    }); // TODO: show success message
    // TODO: append the comment on top of all comments
  }).catch(e => {
    console.log(e);
  });
};
function setReviewModalState(isReviewModalOpen) {
  Object(_services_analyticsService__WEBPACK_IMPORTED_MODULE_2__["reportEvent"])({
    category: 'ReviewModal',
    action: isReviewModalOpen ? 'ModalOpen' : 'ModalClose'
  });
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["SET_REVIEW_MODAL_STATE"],
    payload: {
      isReviewModalOpen
    }
  };
}
function setReviewLoadingState(isReviewLoading) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["SET_REVIEW_LOADING_STATE"],
    payload: {
      isReviewLoading
    }
  };
}

/***/ }),

/***/ "./src/reducers/BusinessPage/constants.js":
/*!************************************************!*\
  !*** ./src/reducers/BusinessPage/constants.js ***!
  \************************************************/
/*! exports provided: GET_BY_FRIENDLY_URL, SUBMIT_BUSINESS_REVIEW_URL, SET_BUSINESS, SET_EMPTY_STATE, SET_REVIEWS, SET_REVIEW_MODAL_STATE, SET_REVIEW_LOADING_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BY_FRIENDLY_URL", function() { return GET_BY_FRIENDLY_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_BUSINESS_REVIEW_URL", function() { return SUBMIT_BUSINESS_REVIEW_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BUSINESS", function() { return SET_BUSINESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_EMPTY_STATE", function() { return SET_EMPTY_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REVIEWS", function() { return SET_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REVIEW_MODAL_STATE", function() { return SET_REVIEW_MODAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REVIEW_LOADING_STATE", function() { return SET_REVIEW_LOADING_STATE; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");

const GET_BY_FRIENDLY_URL = `${_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_API"]}businesses/getByFriendlyUrl`;
const SUBMIT_BUSINESS_REVIEW_URL = `${_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_API"]}businessSurveys/submitBusinessReview`;
const SET_BUSINESS = 'SET_BUSINESS';
const SET_EMPTY_STATE = 'SET_EMPTY_STATE';
const SET_REVIEWS = 'SET_REVIEWS';
const SET_REVIEW_MODAL_STATE = 'SET_REVIEW_MODAL_STATE';
const SET_REVIEW_LOADING_STATE = 'SET_REVIEW_LOADING_STATE';

/***/ }),

/***/ "./src/services/analyticsService.js":
/*!******************************************!*\
  !*** ./src/services/analyticsService.js ***!
  \******************************************/
/*! exports provided: initAnalytics, reportEvent, reportScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAnalytics", function() { return initAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportEvent", function() { return reportEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportScreen", function() { return reportScreen; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);
 // ReactGA.initialize('912341008826-mdvp869k8s8orq80sklbp8o64r26soc9.apps.googleusercontent.com');

const initAnalytics = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize('UA-157971736-1');
};
const reportEvent = params => {
  // if (env !== 'prod') return;
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event(params);
};
const reportScreen = screenName => {
  // if (env !== 'prod') return;
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(screenName);
};

/***/ }),

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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const isMobile = () => {
  try {
    if (!navigator) return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
};
const setCookie = (name, value, days) => {
  let expires = '';

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }

  document.cookie = `${name}=${value || ''}${expires}; path=/`;
};
const getCookie = name => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == ' ') c = c.substring(1, c.length);

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
};
const getFriendlyTime = date => {
  if (!date) {
    return '';
  }

  const parsedDate = new Date(JSON.parse(JSON.stringify(new Date(date))));
  const delta = Math.round((+new Date() - parsedDate) / 1000);
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  let fuzzy;

  if (delta < 30) {
    fuzzy = 'הרגע';
  } else if (delta < minute) {
    fuzzy = `לפני ${delta} שניות`;
  } else if (delta < 2 * minute) {
    fuzzy = 'לפני כדקה';
  } else if (delta < hour) {
    fuzzy = `לפני ${Math.floor(delta / minute)} דקות`;
  } else if (Math.floor(delta / hour) === 1) {
    fuzzy = 'לפני כשעה';
  } else if (delta < day) {
    fuzzy = `לפני ${Math.floor(delta / hour)} שעות`;
  } else if (delta < day * 2) {
    fuzzy = 'אתמול';
  } else {
    fuzzy = moment__WEBPACK_IMPORTED_MODULE_0___default()(parsedDate).format('DD/MM/YYYY');
  }

  return fuzzy;
};

/***/ }),

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
const buildPlaceUrl = place => {
  const {
    _id,
    friendlyUrl,
    heName,
    enName
  } = place;
  return `/place/${_id}/${friendlyUrl || heName || enName}`;
};
/**
 *
 * @param {placeId: string, subCategoryId: string} searchConfig
 */

const buildSearchUrl = searchConfig => {
  const {
    placeId,
    subCategoryId
  } = searchConfig;
  return `/search/${placeId}/${subCategoryId}`;
};
const buildBusinessUrl = business => {
  const {
    friendlyUrl,
    _id,
    englishName
  } = business;
  return `/business/${_id}/${friendlyUrl || englishName || ''}`;
};

/***/ }),

/***/ 3:
/*!**********************************************!*\
  !*** multi ./pages/business/[businessId].js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kobimantzur/mapo/web/pages/business/[businessId].js */"./pages/business/[businessId].js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react-grid-gallery":
/*!*************************************!*\
  !*** external "react-grid-gallery" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-grid-gallery");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "underscore":
/*!*****************************!*\
  !*** external "underscore" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[businessId].js.map