require('source-map-support/register');
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.js");

 // Connect mongo

mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect('mongodb://127.0.0.1:27017/experiment');
const db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('################ Database connected ################');
}); // async function readBook(){
//   try {
//     let books = await bookModel.find()
//     console.log(books)
//   } catch (error){
//     console.log(error)
//   }
// }
// readBook()

async function readInventory(item) {
  try {
    let inventory = await _model__WEBPACK_IMPORTED_MODULE_1__["inventoryModel"].findByItem(item);
    console.log(inventory);
  } catch (error) {
    console.log(error);
  }
}

readInventory('Canvas'); // Database operation

const insertBook = data => {
  let book = new _model__WEBPACK_IMPORTED_MODULE_1__["bookModel"](data);
  book.save((err, doc) => {
    if (err) {
      console.log(err);
    }

    console.log(doc);
  });
}; // insertBook({
//   title: 'New Book',
//   author: 'rifki'
// })


const insertInventory = data => {
  let inventory = new _model__WEBPACK_IMPORTED_MODULE_1__["inventoryModel"](data);
  inventory.itemBranding();
  inventory.save((err, doc) => {
    if (err) {
      console.log(err);
    }

    console.log(doc);
  });
};

insertInventory({
  item: 'Canvas',
  qty: 100,
  tags: ['Cotton'],
  size: {
    h: 28,
    w: 35.5,
    uom: 'cm'
  }
});

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: bookModel, inventoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookModel", function() { return bookModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inventoryModel", function() { return inventoryModel; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
 // Define Schema

const bookSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  title: String,
  author: String
});
const inventorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  item: {
    type: String,
    required: true
  },
  qty: Number,
  tags: [String],
  size: {
    h: Number,
    w: Number,
    uom: String
  }
}); // Static

inventorySchema.statics = {
  findByItem(item) {
    return this.find({
      item
    });
  }

}; // Method

inventorySchema.methods = {
  itemBranding() {
    this.item = this.item + ' by your company';
  }

}; // Create model

const bookModel = new mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Books', bookSchema);
const inventoryModel = new mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Inventory', inventorySchema);


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Experiment\mongo\src/index.js */"./src/index.js");


/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=main.map