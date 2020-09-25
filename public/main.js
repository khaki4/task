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
    debugger
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2UxL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2UxL21vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlMS92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlMi9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlMi9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZTIvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQTRDO0FBQ007O0FBRWxEO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVU7QUFDZCxHQUFHO0FBQ0gseUJBQXlCLHlEQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHdFQUFTOzs7Ozs7Ozs7Ozs7O0FDbEJ4QjtBQUFBO0FBQUE7QUFBQTtBQUFxQjtBQUNjOztBQUVuQztBQUNBLEVBQUUsa0RBQVM7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDTEQ7QUFBQTtBQUFBO0FBQTJCO0FBQ0Y7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQUksY0FBYyw4Q0FBSztBQUMzQjtBQUNBOztBQUVBO0FBQ2UseUVBQVU7O0FBRXpCLElBQUksS0FBVSxFQUFFLEVBSWY7Ozs7Ozs7Ozs7Ozs7QUNqQkQ7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDBFQUFXOzs7Ozs7Ozs7Ozs7O0FDWDFCO0FBQUE7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUztBQUN2QyxJQUFJLGtEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHlFQUFVOzs7Ozs7Ozs7Ozs7O0FDaEJ6QjtBQUFBO0FBQUE7QUFBMkI7QUFDRjs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBSSxjQUFjLDhDQUFLO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRWUseUVBQVU7O0FBRXpCLElBQUksS0FBVSxFQUFFLEVBSWY7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDBFQUFXOzs7Ozs7Ozs7Ozs7O0FDWDFCO0FBQUE7QUFBcUM7O0FBRXJDO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUztBQUN2QyxJQUFJLGtEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHlFQUFVOzs7Ozs7Ozs7Ozs7QUNoQnpCLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vcGFnZTEvY29udHJvbGxlcic7XG5pbXBvcnQgKiBhcyBjb250cm9sbGVyMiBmcm9tICcuL3BhZ2UyL2NvbnRyb2xsZXInO1xuXG5jb25zdCBhcHBSb3V0ZXIgPSB7XG4gIGluaXRDb250cm9sbGVyOiAoKSA9PiB7XG4gICAgZGVidWdnZXJcbiAgICBjb250cm9sbGVyLmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpKVxuICB9LFxuICBpbml0Q29udHJvbGxlcjI6ICgpID0+IGNvbnRyb2xsZXIyLmRlZmF1bHQuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikpLFxuICByb3V0ZXI6ICgpID0+IHtcbiAgICAocm91dGVyTWFwW2xvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpXSkoKTtcbiAgfVxufVxuY29uc3Qgcm91dGVyTWFwID0ge1xuICAnJyA6IGFwcFJvdXRlci5pbml0Q29udHJvbGxlcixcbiAgJ3Jlc3VsdCc6IGFwcFJvdXRlci5pbml0Q29udHJvbGxlcjJcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwUm91dGVyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBhcHBSb3V0ZXIgZnJvbSAnLi9hcHBSb3V0ZXInXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgYXBwUm91dGVyLmluaXRDb250cm9sbGVyKClcbn0pXG4iLCJpbXBvcnQgbW9kZWwgZnJvbSBcIi4vbW9kZWxcIlxuaW1wb3J0IHZpZXcgZnJvbSBcIi4vdmlld1wiXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICBhc3luYyBpbml0KGVsKSB7XG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdmlldy5yZW5kZXIoYXdhaXQgbW9kZWwuZ2V0KCksIHRoaXMuZWwpXG4gIH1cbn1cblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKClcbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZXJcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3ZpZXdcIiwgYXN5bmMgKCkgPT4ge1xuICAgIHZpZXcucmVuZGVyKGF3YWl0IG1vZGVsLmdldCgpLCBjb250cm9sbGVyLmVsKVxuICB9KVxufVxuIiwiY29uc3QgVVJJID0gJ2h0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2tha2FvcGF5LWZlL3Jlc291cmNlcy93b3JkcydcblxuY2xhc3MgTW9kZWwge1xuICBhc3luYyBnZXQoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goVVJJKVxuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSlcbiAgICByZXR1cm4ganNvbkRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTW9kZWwoKVxuIiwiaW1wb3J0IGFwcFJvdXRlciBmcm9tICcuLi9hcHBSb3V0ZXInXG5cbmNsYXNzIFZpZXcge1xuICBnb1Jlc3VsdCgpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyByZXM6IDEgfSwgJ2hvbWUnLCBgL3Jlc3VsdGApO1xuICAgIGFwcFJvdXRlci5yb3V0ZXIodGhpcy5vbkRlc3Ryb3koKSlcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3QnKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ29SZXN1bHQuYmluZCh0aGlzKSk7XG4gIH1cbiAgcmVuZGVyKGRhdGEsIGVsKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gYDxidXR0b24gaWQ9XCJ0ZXN0XCI+Z28gcmVzdWx0PC9idXR0b24+YFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdvUmVzdWx0LmJpbmQodGhpcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWaWV3KClcbiIsImltcG9ydCBtb2RlbCBmcm9tIFwiLi9tb2RlbFwiXG5pbXBvcnQgdmlldyBmcm9tIFwiLi92aWV3XCJcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIGFzeW5jIGluaXQoZWwpIHtcbiAgICB0aGlzLmVsID0gZWxcbiAgICB2aWV3LnJlbmRlcihhd2FpdCBtb2RlbC5nZXQoKSwgdGhpcy5lbClcbiAgfVxufVxuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKVxuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi92aWV3XCIsIGFzeW5jICgpID0+IHtcbiAgICB2aWV3LnJlbmRlcihhd2FpdCBtb2RlbC5nZXQoKSwgY29udHJvbGxlci5lbClcbiAgfSlcbn1cbiIsImNvbnN0IFVSSSA9ICdodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbS9rYWthb3BheS1mZS9yZXNvdXJjZXMvd29yZHMnXG5cbmNsYXNzIE1vZGVsIHtcbiAgYXN5bmMgZ2V0KCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFVSSSlcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uRGF0YSkpXG4gICAgcmV0dXJuIGpzb25EYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vZGVsKClcbiIsImltcG9ydCBhcHBSb3V0ZXIgZnJvbSAnLi4vYXBwUm91dGVyJztcblxuY2xhc3MgVmlldyB7XG4gIGdvSG9tZSgpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyByZXM6IDEgfSwgJ2hvbWUnLCBgL2ApO1xuICAgIGFwcFJvdXRlci5yb3V0ZXIodGhpcy5vbkRlc3Ryb3koKSlcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3QyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdvSG9tZS5iaW5kKHRoaXMpKTtcbiAgfVxuICByZW5kZXIoZGF0YSwgZWwpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBgPGJ1dHRvbiBpZD1cInRlc3QyXCI+Z28gaG9tZTwvYnV0dG9uPmBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdDInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ29Ib21lLmJpbmQodGhpcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWaWV3KClcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=