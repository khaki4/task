/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/appRouter.js":
/*!**************************!*\
  !*** ./src/appRouter.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page1_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page1/controller */ "./src/page1/controller.js");
/* harmony import */ var _page2_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2/controller */ "./src/page2/controller.js");



const appRouter = {
  initController: () => {
    _page1_controller__WEBPACK_IMPORTED_MODULE_0__["default"].init(document.querySelector("#root"))
  },
  initController2: () => _page2_controller__WEBPACK_IMPORTED_MODULE_1__["default"].init(document.querySelector("#root")),
  router: () => {
    (routerMap[location.pathname.slice(1)])();
  }
}
const routerMap = {
  '' : appRouter.initController,
  'result': appRouter.initController2
}

/* harmony default export */ __webpack_exports__["default"] = (appRouter);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appRouter */ "./src/appRouter.js");



document.addEventListener("DOMContentLoaded", () => {
  _appRouter__WEBPACK_IMPORTED_MODULE_1__["default"].initController()
})


/***/ }),

/***/ "./src/page1/controller.js":
/*!*********************************!*\
  !*** ./src/page1/controller.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/page1/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/page1/view.js");



class Controller {
  async init(el) {
    this.el = el
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].render(await _model__WEBPACK_IMPORTED_MODULE_0__["default"].get(), this.el)
  }
}

const controller = new Controller()
/* harmony default export */ __webpack_exports__["default"] = (controller);

if (false) {}


/***/ }),

/***/ "./src/page1/model.js":
/*!****************************!*\
  !*** ./src/page1/model.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const URI = 'https://my-json-server.typicode.com/kakaopay-fe/resources/words'

class Model {
  async get() {
    const res = await fetch(URI)
    const jsonData = await res.json()
    console.log(JSON.stringify(jsonData))
    return jsonData
  }
}

/* harmony default export */ __webpack_exports__["default"] = (new Model());


/***/ }),

/***/ "./src/page1/view.js":
/*!***************************!*\
  !*** ./src/page1/view.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appRouter */ "./src/appRouter.js");


class View {
  goResult() {
    window.history.pushState({ res: 1 }, 'home', `/result`);
    _appRouter__WEBPACK_IMPORTED_MODULE_0__["default"].router(this.onDestroy())
  }
  onDestroy() {
    document.querySelector('#test').removeEventListener('click', this.goResult.bind(this));
  }
  render(data, el) {
    el.innerHTML = `<button id="test">go result</button>`
    document.querySelector('#test').addEventListener('click', this.goResult.bind(this));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (new View());


/***/ }),

/***/ "./src/page2/controller.js":
/*!*********************************!*\
  !*** ./src/page2/controller.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/page2/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/page2/view.js");



class Controller {
  async init(el) {
    this.el = el
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].render(await _model__WEBPACK_IMPORTED_MODULE_0__["default"].get(), this.el)
  }
}

const controller = new Controller()

/* harmony default export */ __webpack_exports__["default"] = (controller);

if (false) {}


/***/ }),

/***/ "./src/page2/model.js":
/*!****************************!*\
  !*** ./src/page2/model.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const URI = 'https://my-json-server.typicode.com/kakaopay-fe/resources/words'

class Model {
  async get() {
    const res = await fetch(URI)
    const jsonData = await res.json()
    console.log(JSON.stringify(jsonData))
    return jsonData
  }
}

/* harmony default export */ __webpack_exports__["default"] = (new Model());


/***/ }),

/***/ "./src/page2/view.js":
/*!***************************!*\
  !*** ./src/page2/view.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appRouter */ "./src/appRouter.js");


class View {
  goHome() {
    window.history.pushState({ res: 1 }, 'home', `/`);
    _appRouter__WEBPACK_IMPORTED_MODULE_0__["default"].router(this.onDestroy())
  }
  onDestroy() {
    document.querySelector('#test2').removeEventListener('click', this.goHome.bind(this));
  }
  render(data, el) {
    el.innerHTML = `<button id="test2">go home</button>`
    document.querySelector('#test2').addEventListener('click', this.goHome.bind(this));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (new View());


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2UxL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2UxL21vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlMS92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlMi9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlMi9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZTIvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQTRDO0FBQ007O0FBRWxEO0FBQ0E7QUFDQSxJQUFJLHlEQUFVO0FBQ2QsR0FBRztBQUNILHlCQUF5Qix5REFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx3RUFBUzs7Ozs7Ozs7Ozs7OztBQ2pCeEI7QUFBQTtBQUFBO0FBQUE7QUFBcUI7QUFDYzs7QUFFbkM7QUFDQSxFQUFFLGtEQUFTO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0xEO0FBQUE7QUFBQTtBQUEyQjtBQUNGOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFJLGNBQWMsOENBQUs7QUFDM0I7QUFDQTs7QUFFQTtBQUNlLHlFQUFVOztBQUV6QixJQUFJLEtBQVUsRUFBRSxFQUlmOzs7Ozs7Ozs7Ozs7O0FDakJEO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwwRUFBVzs7Ozs7Ozs7Ozs7OztBQ1gxQjtBQUFBO0FBQW9DOztBQUVwQztBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkMsSUFBSSxrREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx5RUFBVTs7Ozs7Ozs7Ozs7OztBQ2hCekI7QUFBQTtBQUFBO0FBQTJCO0FBQ0Y7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQUksY0FBYyw4Q0FBSztBQUMzQjtBQUNBOztBQUVBOztBQUVlLHlFQUFVOztBQUV6QixJQUFJLEtBQVUsRUFBRSxFQUlmOzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwwRUFBVzs7Ozs7Ozs7Ozs7OztBQ1gxQjtBQUFBO0FBQXFDOztBQUVyQztBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkMsSUFBSSxrREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx5RUFBVTs7Ozs7Ozs7Ozs7O0FDaEJ6Qix1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL3BhZ2UxL2NvbnRyb2xsZXInO1xuaW1wb3J0ICogYXMgY29udHJvbGxlcjIgZnJvbSAnLi9wYWdlMi9jb250cm9sbGVyJztcblxuY29uc3QgYXBwUm91dGVyID0ge1xuICBpbml0Q29udHJvbGxlcjogKCkgPT4ge1xuICAgIGNvbnRyb2xsZXIuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikpXG4gIH0sXG4gIGluaXRDb250cm9sbGVyMjogKCkgPT4gY29udHJvbGxlcjIuZGVmYXVsdC5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKSksXG4gIHJvdXRlcjogKCkgPT4ge1xuICAgIChyb3V0ZXJNYXBbbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSldKSgpO1xuICB9XG59XG5jb25zdCByb3V0ZXJNYXAgPSB7XG4gICcnIDogYXBwUm91dGVyLmluaXRDb250cm9sbGVyLFxuICAncmVzdWx0JzogYXBwUm91dGVyLmluaXRDb250cm9sbGVyMlxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBSb3V0ZXJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGFwcFJvdXRlciBmcm9tICcuL2FwcFJvdXRlcidcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBhcHBSb3V0ZXIuaW5pdENvbnRyb2xsZXIoKVxufSlcbiIsImltcG9ydCBtb2RlbCBmcm9tIFwiLi9tb2RlbFwiXG5pbXBvcnQgdmlldyBmcm9tIFwiLi92aWV3XCJcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIGFzeW5jIGluaXQoZWwpIHtcbiAgICB0aGlzLmVsID0gZWxcbiAgICB2aWV3LnJlbmRlcihhd2FpdCBtb2RlbC5nZXQoKSwgdGhpcy5lbClcbiAgfVxufVxuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKVxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlclxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdmlld1wiLCBhc3luYyAoKSA9PiB7XG4gICAgdmlldy5yZW5kZXIoYXdhaXQgbW9kZWwuZ2V0KCksIGNvbnRyb2xsZXIuZWwpXG4gIH0pXG59XG4iLCJjb25zdCBVUkkgPSAnaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20va2FrYW9wYXktZmUvcmVzb3VyY2VzL3dvcmRzJ1xuXG5jbGFzcyBNb2RlbCB7XG4gIGFzeW5jIGdldCgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChVUkkpXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpKVxuICAgIHJldHVybiBqc29uRGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNb2RlbCgpXG4iLCJpbXBvcnQgYXBwUm91dGVyIGZyb20gJy4uL2FwcFJvdXRlcidcblxuY2xhc3MgVmlldyB7XG4gIGdvUmVzdWx0KCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHJlczogMSB9LCAnaG9tZScsIGAvcmVzdWx0YCk7XG4gICAgYXBwUm91dGVyLnJvdXRlcih0aGlzLm9uRGVzdHJveSgpKVxuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdCcpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5nb1Jlc3VsdC5iaW5kKHRoaXMpKTtcbiAgfVxuICByZW5kZXIoZGF0YSwgZWwpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBgPGJ1dHRvbiBpZD1cInRlc3RcIj5nbyByZXN1bHQ8L2J1dHRvbj5gXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ29SZXN1bHQuYmluZCh0aGlzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZpZXcoKVxuIiwiaW1wb3J0IG1vZGVsIGZyb20gXCIuL21vZGVsXCJcbmltcG9ydCB2aWV3IGZyb20gXCIuL3ZpZXdcIlxuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgYXN5bmMgaW5pdChlbCkge1xuICAgIHRoaXMuZWwgPSBlbFxuICAgIHZpZXcucmVuZGVyKGF3YWl0IG1vZGVsLmdldCgpLCB0aGlzLmVsKVxuICB9XG59XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZXJcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3ZpZXdcIiwgYXN5bmMgKCkgPT4ge1xuICAgIHZpZXcucmVuZGVyKGF3YWl0IG1vZGVsLmdldCgpLCBjb250cm9sbGVyLmVsKVxuICB9KVxufVxuIiwiY29uc3QgVVJJID0gJ2h0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2tha2FvcGF5LWZlL3Jlc291cmNlcy93b3JkcydcblxuY2xhc3MgTW9kZWwge1xuICBhc3luYyBnZXQoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goVVJJKVxuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSlcbiAgICByZXR1cm4ganNvbkRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTW9kZWwoKVxuIiwiaW1wb3J0IGFwcFJvdXRlciBmcm9tICcuLi9hcHBSb3V0ZXInO1xuXG5jbGFzcyBWaWV3IHtcbiAgZ29Ib21lKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHJlczogMSB9LCAnaG9tZScsIGAvYCk7XG4gICAgYXBwUm91dGVyLnJvdXRlcih0aGlzLm9uRGVzdHJveSgpKVxuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdDInKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ29Ib21lLmJpbmQodGhpcykpO1xuICB9XG4gIHJlbmRlcihkYXRhLCBlbCkge1xuICAgIGVsLmlubmVySFRNTCA9IGA8YnV0dG9uIGlkPVwidGVzdDJcIj5nbyBob21lPC9idXR0b24+YFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0MicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5nb0hvbWUuYmluZCh0aGlzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZpZXcoKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==