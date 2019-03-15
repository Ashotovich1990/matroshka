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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/basket.js":
/*!***********************!*\
  !*** ./src/basket.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Basket  {
    constructor(ctx) {
        this.ctx = ctx;
    }

    drawBasket(x,y) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(x + 50, y)
        this.ctx.lineTo(x + 20, y + 50)
        this.ctx.lineTo(x, y + 50)
        this.ctx.lineTo(x - 30, y)
        this.ctx.lineTo(x, y)
        this.ctx.strokeStyle = '#8B0000'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();
    }

    move(direction) {
        if (direction === 1) {
            this.drawBasket(220, 280);
        } else if (direction === 2) {
            this.drawBasket(220, 420)
        } else if ( direction === 3) {
            this.drawBasket(760, 280);
        } else if (direction === 4) {
            this.drawBasket(760, 420)
        }
    }


}

/* harmony default export */ __webpack_exports__["default"] = (Basket);

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Board {
   constructor(ctx, chicken, chickenRotate, kremlin) {
        this.ctx = ctx;
        this.chicken = chicken;
        this.chickenRotate = chickenRotate;
        this.kremlin = kremlin;
   }


    move()  {
        this.ctx.fillStyle = "#D8D8D8"; 
        this.ctx.fillRect(0,0,1000,1200); 
        this.ctx.beginPath();
        this.ctx.moveTo(0,200)
        this.ctx.lineTo(80,200)
        this.ctx.lineTo(170,250)
        this.ctx.strokeStyle = '#a17f1a'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(0,350)
        this.ctx.lineTo(80,350)
        this.ctx.lineTo(170,400)
        this.ctx.strokeStyle = '#a17f1a'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(1000,350)
        this.ctx.lineTo(920,350)
        this.ctx.lineTo(830,400)
        this.ctx.strokeStyle = '#a17f1a'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(1000,200)
        this.ctx.lineTo(920,200)
        this.ctx.lineTo(830,250)
        this.ctx.strokeStyle = '#a17f1a'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Board);



/***/ }),

/***/ "./src/chicken.js":
/*!************************!*\
  !*** ./src/chicken.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Chicken {
    constructor(ctx, image, x) {
       this.ctx = ctx;
       this.image = image;
       this.x = x;
    }
    
    move() {
       this.ctx.drawImage(this.image, this.x, 100, 100, 100)
       this.ctx.drawImage(this.image, this.x, 250, 100, 100)   
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Chicken);

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


document.addEventListener("DOMContentLoaded", () => {
   let x;
   const game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
   loop()
   document.addEventListener('keypress', event => {
       if (event.code === "KeyA") {
           x = 1;
       } else if (event.code === "KeyZ") {
           x = 2;
       } else if (event.code === "KeyK") {
           x = 3;
       } else if (event.code === "KeyM") {
           x = 4;
       }
   })
   x = x || 1;
   
   function loop() {
    requestAnimationFrame(loop);
    game.play(x);
   }
});

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _matroshka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matroshka */ "./src/matroshka.js");
/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket */ "./src/basket.js");
/* harmony import */ var _chicken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chicken */ "./src/chicken.js");
/* harmony import */ var _kremlin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kremlin */ "./src/kremlin.js");






function Game() {
    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d'); 

    const chicken = new Image ();
    chicken.src = './images/chicken.png'

    const chickenRotate = new Image();
    chickenRotate.src = './images/chicken-rotate.png'

    const matroshkaPic = new Image();
    matroshkaPic.src = './images/matroshka.png'
    
    const kremlinPic = new Image();
    kremlinPic.src = './images/kremlin.png'

    const board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, chicken, chickenRotate);
    const matroshka = new _matroshka__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, matroshkaPic);
    const basket = new _basket__WEBPACK_IMPORTED_MODULE_2__["default"](ctx);
    const chickenLeft = new _chicken__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, chicken, 10)
    const chickenRight = new _chicken__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, chickenRotate, 890)
    const kremlin = new _kremlin__WEBPACK_IMPORTED_MODULE_4__["default"](ctx, kremlinPic);

    this.play = (x) => {
        board.move();
        matroshka.move(x)
        basket.move(x);
        chickenLeft.move();
        chickenRight.move();
        kremlin.move();
    }
}

/***/ }),

/***/ "./src/kremlin.js":
/*!************************!*\
  !*** ./src/kremlin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Kremlin {
    constructor(ctx, image) {
        this.ctx = ctx;
        this.image = image;
    }

    move() {
        this.ctx.drawImage(this.image, 450, 200, 100, 200) 
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Kremlin);

/***/ }),

/***/ "./src/matroshka.js":
/*!**************************!*\
  !*** ./src/matroshka.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Matroshka  {
    constructor(ctx,matroshka) {
        this.matroshka = matroshka;
        this.ctx = ctx;
    }

    drawMatroshka(x, y) {
        this.ctx.drawImage(this.matroshka, x, y, 140, 250)
    }

    move(direction) {
        if (direction === 1) {
            this.drawMatroshka(280, 280);
            // drawBasket(220, 280);
        } else if (direction === 2) {
            this.drawMatroshka(280, 280);
            // drawBasket(220, 420)
        } else if ( direction === 3) {
            this.drawMatroshka(580, 280);
            // drawBasket(760, 280);
        } else if (direction === 4) {
            this.drawMatroshka(580, 280);
            // drawBasket(760, 420)
        }
    }


}

/* harmony default export */ __webpack_exports__["default"] = (Matroshka);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map