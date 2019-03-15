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

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: createBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBoard", function() { return createBoard; });
// import {redStars} from './red_stars';

const createBoard = (direction, chicken, chickenRotate, matroshka, kremlin) => {
    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d'); 
    ctx.fillStyle = "#D8D8D8"; 
    ctx.fillRect(0,0,1000,1200); 
   
    ctx.beginPath();
    ctx.moveTo(0,200)
    ctx.lineTo(80,200)
    ctx.lineTo(170,250)
    ctx.strokeStyle = '#a17f1a'
    ctx.lineWidth = 12
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0,350)
    ctx.lineTo(80,350)
    ctx.lineTo(170,400)
    ctx.strokeStyle = '#a17f1a'
    ctx.lineWidth = 12
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(1000,350)
    ctx.lineTo(920,350)
    ctx.lineTo(830,400)
    ctx.strokeStyle = '#a17f1a'
    ctx.lineWidth = 12
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(1000,200)
    ctx.lineTo(920,200)
    ctx.lineTo(830,250)
    ctx.strokeStyle = '#a17f1a'
    ctx.lineWidth = 12
    ctx.stroke();
    ctx.closePath();

    function draw(ctx, image) {
            ctx.drawImage(image, 10, 100, 100, 100)
            ctx.drawImage(image, 10, 250, 100, 100)   
    }

    function drawRotate(ctx, image) {
            ctx.drawImage(image, 890, 100, 100, 100)
            ctx.drawImage(image, 890, 250, 100, 100)
      
    }

    function drawMatroshka(ctx, image, x, y) {
            ctx.drawImage(image, x, y, 140, 250)
    }

    function drawKremlin(ctx, image) {
        ctx.drawImage(image, 450, 200, 100, 200)
    }

    draw(ctx,chicken);
    drawRotate(ctx,chickenRotate);
    drawKremlin(ctx, kremlin);
   
    

    function drawBasket(x,y) {
        ctx.beginPath();
        ctx.moveTo(x, y)
        ctx.lineTo(x + 50, y)
        ctx.lineTo(x + 20, y + 50)
        ctx.lineTo(x, y + 50)
        ctx.lineTo(x - 30, y)
        ctx.lineTo(x, y)
        ctx.strokeStyle = '#8B0000'
        ctx.lineWidth = 12
        ctx.stroke();
        ctx.closePath();
    }

    if (direction === 1) {
        drawMatroshka(ctx, matroshka, 280, 280);
        drawBasket(220, 280);
    } else if (direction === 2) {
        drawMatroshka(ctx, matroshka, 280, 280);
        drawBasket(220, 420)
    } else if ( direction === 3) {
        drawMatroshka(ctx, matroshka, 580, 280);
        drawBasket(760, 280);
    } else if (direction === 4) {
        drawMatroshka(ctx, matroshka, 580, 280);
        drawBasket(760, 420)
    }
}

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


function Game() {
    const chicken = new Image ();
    chicken.src = './images/chicken.png'

    const chickenRotate = new Image();
    chickenRotate.src = './images/chicken-rotate.png'

    const matroshka = new Image();
    matroshka.src = './images/matroshka.png'
    
    const kremlin = new Image();
    kremlin.src = './images/kremlin.png'

    const redStar = new Image();
    redStar.src = './images/redstar.png'

    this.play = move => {
       return Object(_board__WEBPACK_IMPORTED_MODULE_0__["createBoard"])(move, chicken, chickenRotate, matroshka, kremlin, redStar)
    }
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map