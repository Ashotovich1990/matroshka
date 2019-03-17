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

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/*! exports provided: playAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAudio", function() { return playAudio; });

const playAudio = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    
    const audioElement = document.querySelector('audio');
    
    const playButton = document.querySelector('button');
    
    playButton.addEventListener('click', function() {

        if (audioContext.state === 'suspended') {
            audioContext.resume();
          
        }
    
        if (this.dataset.playing === 'false') {
           
            audioElement.play();
            this.dataset.playing = 'true';
        } else if (this.dataset.playing === 'true') {
            audioElement.pause();
            this.dataset.playing = 'false';
        }
    
    }, false);
}

/***/ }),

/***/ "./src/basket.js":
/*!***********************!*\
  !*** ./src/basket.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const image = new Image();
image.src = './images/basket.png'

class Basket  {
    constructor(ctx) {
        this.ctx = ctx;
        this.image = image;
        this.pos = [];
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
    
    drawBasket(x,y) {
        this.ctx.drawImage(this.image, x, y, 80, 80)
    }

    move(direction) {
        if (direction === 1) {
            this.pos = [200,280];
            this.drawBasket(...this.pos);
        } else if (direction === 2) {
            this.pos = [200,430];
            this.drawBasket(...this.pos)
        } else if ( direction === 3) {
            this.pos = [720,280];
            this.drawBasket(...this.pos);
        } else if (direction === 4) {
            this.pos = [720,430]
            this.drawBasket(...this.pos)
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
/* harmony import */ var _chicken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chicken */ "./src/chicken.js");


const moscow = new Image();
moscow.src = './images/moscow.png'

class Board {
   constructor(ctx) {
       this.ctx = ctx;
       this.chickenLeft = new _chicken__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, 1, 10)
       this.chickenRight = new _chicken__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, 2, 890)
    }
    
    move()  {
        this.ctx.drawImage(moscow,0,0, 1000, 600);
        this.ctx.beginPath();
        this.ctx.moveTo(0,210)
        this.ctx.lineTo(80,210)
        this.ctx.lineTo(200,260)
        this.ctx.strokeStyle = '#912903'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(0,360)
        this.ctx.lineTo(80,360)
        this.ctx.lineTo(200,410)
        this.ctx.strokeStyle = '#912903'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(1000,360)
        this.ctx.lineTo(920,360)
        this.ctx.lineTo(800,410)
        this.ctx.strokeStyle = '#912903'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(1000,210)
        this.ctx.lineTo(920,210)
        this.ctx.lineTo(800,260)
        this.ctx.strokeStyle = '#912903'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();
        
        this.chickenLeft.move();
        this.chickenRight.move();
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
const chicken = new Image ();
chicken.src = './images/chicken.png'

const chickenRotate = new Image();
chickenRotate.src = './images/chicken-rotate.png'

class Chicken {
    constructor(ctx, imgCode, x) {
       this.ctx = ctx;
       let img;
       if (imgCode === 1) {
           img = chicken;
       } else {
           img = chickenRotate;
       }
       this.image = img;
       this.x = x;
    }
    
    move() {
       this.ctx.drawImage(this.image, this.x, 110, 100, 100)
       this.ctx.drawImage(this.image, this.x, 260, 100, 100)   
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Chicken);

/***/ }),

/***/ "./src/eggs/bottom_left_egg.js":
/*!*************************************!*\
  !*** ./src/eggs/bottom_left_egg.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _egg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./egg */ "./src/eggs/egg.js");


class EggBottomLeft extends _egg__WEBPACK_IMPORTED_MODULE_0__["default"] {
   constructor(ctx) {
      super();
      this.ctx = ctx;
      this.pos = [100, 300];
   }

   move(x) {
      if (this.pos[1] <= 337) {
         this.pos[0] += 0 * x;
         this.pos[1] += 0.1 * x;
         this.ctx.drawImage(this.imageTwo, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 337 && this.pos[1] <= 350) {
         this.pos[0] += 0.1 * x;
         this.pos[1] += 0.06 * x;
         this.ctx.drawImage(this.imageOne, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 350 && this.pos[1] <= 385) {
         this.pos[0] += 0.12 * x;
         this.pos[1] += 0.06 * x;
         this.ctx.drawImage(this.imageFour, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 385 && this.pos[1] <= 390) {
         this.pos[0] += 0.12 * x;
         this.pos[1] += 0.04 * x;
         this.ctx.drawImage(this.imageFour, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 390 && this.pos[1] <= 442) {
         this.pos[0] += 0 * x;
         this.pos[1] += 0.1 * x;
         this.ctx.drawImage(this.imageThree, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 1001 && this.pos[1] < 1200) {
         this.ctx.drawImage(this.imageSeven, 200, 550, 30, 30)
         this.pos[1] += 5
      }

   }
  
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (EggBottomLeft);

/***/ }),

/***/ "./src/eggs/bottom_right_egg.js":
/*!**************************************!*\
  !*** ./src/eggs/bottom_right_egg.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _egg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./egg */ "./src/eggs/egg.js");


class EggBottomRight extends _egg__WEBPACK_IMPORTED_MODULE_0__["default"] {
   constructor(ctx) {
      super()
      this.ctx = ctx;
      this.pos = [870, 300];
   }

   move(x) {
      if (this.pos[1] <= 337) {
         this.pos[0] += 0 * x;
         this.pos[1] += 0.1 * x;
         this.ctx.drawImage(this.imageFour, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 337 && this.pos[1] <= 350) {
         this.pos[0] -= 0.1 * x;
         this.pos[1] += 0.06 * x;
         this.ctx.drawImage(this.imageOne, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 350 && this.pos[1] <= 385) {
         this.pos[0] -= 0.12 * x;
         this.pos[1] += 0.06 * x;
         this.ctx.drawImage(this.imageTwo, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 385 && this.pos[1] <= 390) {
         this.pos[0] -= 0.12 * x;
         this.pos[1] += 0.04 * x;
         this.ctx.drawImage(this.imageTwo, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 390 && this.pos[1] <= 442) {
        this.pos[0] += 0 * x;
        this.pos[1] += 0.1 * x;
        this.ctx.drawImage(this.imageThree, this.pos[0], this.pos[1], 30, 30)
     } else if (this.pos[1] > 1001 && this.pos[1] < 1200) {
      this.ctx.drawImage(this.imageSix, 750, 550, 30, 30)
      this.pos[1] += 5
   }
      
   }

}

/* harmony default export */ __webpack_exports__["default"] = (EggBottomRight);

/***/ }),

/***/ "./src/eggs/egg.js":
/*!*************************!*\
  !*** ./src/eggs/egg.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const egg_one = new Image();
egg_one.src = './images/egg_one.png'

const egg_two = new Image();
egg_two.src = './images/egg_two.png'

const egg_three = new Image();
egg_three.src = './images/egg_three.png'

const egg_four = new Image();
egg_four.src = './images/egg_four.png'

const borken_egg_two = new Image();
borken_egg_two.src = './images/broken_egg_two.png'

const borken_egg_one = new Image();
borken_egg_one.src = './images/broken_egg_one.png'

class Egg {
    constructor() {
      this.imageOne = egg_one;
      this.imageTwo = egg_two;
      this.imageThree = egg_three;
      this.imageFour = egg_four;
      this.imageSix = borken_egg_two;
      this.imageSeven = borken_egg_one;
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Egg);

/***/ }),

/***/ "./src/eggs/top_left_egg.js":
/*!**********************************!*\
  !*** ./src/eggs/top_left_egg.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _egg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./egg */ "./src/eggs/egg.js");


class EggTopLeft extends _egg__WEBPACK_IMPORTED_MODULE_0__["default"] {
   constructor(ctx) {
      super()
      this.ctx = ctx;
      this.pos = [100, 150];
   }

   move(x) {
      if (this.pos[1] <= 186) {
         this.pos[0] += 0 * x;
         this.pos[1] += 0.1 * x;
         this.ctx.drawImage(this.imageTwo, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 186 && this.pos[1] <= 200) {
         this.pos[0] += 0.1 * x;
         this.pos[1] += 0.07 * x;
         this.ctx.drawImage(this.imageOne, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 200 && this.pos[1] <= 235) {
         this.pos[0] += 0.13 * x;
         this.pos[1] += 0.06 * x;
         this.ctx.drawImage(this.imageFour, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 235 && this.pos[1] <= 239) {
         this.pos[0] += 0.13 * x;
         this.pos[1] += 0.04 * x;
         this.ctx.drawImage(this.imageFour, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 239 && this.pos[1] <= 290) {
         this.pos[0] += 0 * x;
         this.pos[1] += 0.1 * x;
         this.ctx.drawImage(this.imageThree, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 1001 && this.pos[1] < 1200) {
         this.ctx.drawImage(this.imageSeven, 230, 550, 30, 30)
         this.pos[1] += 5
      }
      
   }

}

/* harmony default export */ __webpack_exports__["default"] = (EggTopLeft);


/***/ }),

/***/ "./src/eggs/top_right_egg.js":
/*!***********************************!*\
  !*** ./src/eggs/top_right_egg.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _egg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./egg */ "./src/eggs/egg.js");


class EggTopRight extends _egg__WEBPACK_IMPORTED_MODULE_0__["default"] {
   constructor(ctx) {
      super()
      this.ctx = ctx;
      this.pos = [870, 150];
   }

   move(x) {
      if (this.pos[1] <= 186) {
         this.pos[0] += 0 * x;
         this.pos[1] += 0.1 * x;
         this.ctx.drawImage(this.imageFour, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 186 && this.pos[1] <= 200) {
         this.pos[0] -= 0.1 * x;
         this.pos[1] += 0.07 * x;
         this.ctx.drawImage(this.imageOne, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 200 && this.pos[1] <= 235) {
         this.pos[0] -= 0.13 * x;
         this.pos[1] += 0.06 * x;
         this.ctx.drawImage(this.imageTwo, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 235 && this.pos[1] <= 239) {
         this.pos[0] -= 0.13 * x;
         this.pos[1] += 0.04 * x;
         this.ctx.drawImage(this.imageTwo, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 239 && this.pos[1] <= 290) {
        this.pos[0] += 0 * x;
        this.pos[1] += 0.1 * x;
        this.ctx.drawImage(this.imageThree, this.pos[0], this.pos[1], 30, 30)
      }  else if (this.pos[1] > 1001 && this.pos[1] < 1200) {
         this.ctx.drawImage(this.imageSix, 730, 550, 30, 30)
         this.pos[1] += 5
      }
      
   }

}

/* harmony default export */ __webpack_exports__["default"] = (EggTopRight);

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
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio */ "./src/audio.js");
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro */ "./src/intro.js");




document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d'); 
    Object(_audio__WEBPACK_IMPORTED_MODULE_1__["playAudio"])();

    const intro = new _intro__WEBPACK_IMPORTED_MODULE_2__["default"](ctx);
    intro.move();

    document.getElementById("play").addEventListener("click", () => {
        let x;
        const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
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
        
        let level = 1
        
        game.fillHans(1);

        const levelOne = setInterval(() => {
            if (game.speed < 20) {
                game.speed += 0.1;
            }
            game.fillHans(level);
        }, 2000) 
      
        setInterval(() => {
            if (level < 5) {
                level += 1;
            }
        }, 30000) 

        setTimeout(() => {
            clearInterval(levelOne)
            setInterval(() => {
                if (game.speed < 22) {
                    game.speed += 0.1;
                }
                game.fillHans(level);
            }, 1000) 
        }, 180000)

        function loop() {
            if (game.score.broken <= 0) {
                return cancelAnimationFrame(loop);
            }
            requestAnimationFrame(loop);
            game.step(x);
        } 
    });

});

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _matroshka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matroshka */ "./src/matroshka.js");
/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket */ "./src/basket.js");
/* harmony import */ var _eggs_top_left_egg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eggs/top_left_egg */ "./src/eggs/top_left_egg.js");
/* harmony import */ var _eggs_bottom_left_egg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eggs/bottom_left_egg */ "./src/eggs/bottom_left_egg.js");
/* harmony import */ var _eggs_top_right_egg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eggs/top_right_egg */ "./src/eggs/top_right_egg.js");
/* harmony import */ var _eggs_bottom_right_egg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eggs/bottom_right_egg */ "./src/eggs/bottom_right_egg.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./score */ "./src/score.js");
/* harmony import */ var _game_over__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game_over */ "./src/game_over.js");










class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx);
        this.matroshka = new _matroshka__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx);
        this.basket = new _basket__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx);
        this.eggBottomLeft = new _eggs_top_left_egg__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx);
        this.score = new _score__WEBPACK_IMPORTED_MODULE_7__["default"](this.ctx, 0, 3);
        this.gameOver = new _game_over__WEBPACK_IMPORTED_MODULE_8__["default"](this.ctx);
        this.eggs = [];
        this.checkCollision = this.checkCollision.bind(this);
        this.speed = 7;
    }

    fillHans(x) {
        let chance = Math.random();
        chance = x * chance
        if (chance <= 1) {
            this.generateEggs(1);
        } else if (chance > 1 && chance <= 2) {
            this.generateEggs(2);
        } else if (chance > 2 && chance <= 4.5) {
            this.generateEggs(3);
        } else if (chance > 4.5 && chance <= 5) {
            this.generateEggs(4);
        } 
    }

    generateEggs(difficultyLevel) {
        let eggTopLeft = new _eggs_top_left_egg__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx);
        let eggBottomLeft = new _eggs_bottom_left_egg__WEBPACK_IMPORTED_MODULE_4__["default"](this.ctx);
        let eggTopRight = new _eggs_top_right_egg__WEBPACK_IMPORTED_MODULE_5__["default"](this.ctx);
        let eggBottomRight = new _eggs_bottom_right_egg__WEBPACK_IMPORTED_MODULE_6__["default"](this.ctx);
        let eggs = this.shuffleEggs([eggTopLeft, eggBottomLeft, eggTopRight,eggBottomRight]).slice(0,difficultyLevel);
        this.eggs = this.eggs.concat(eggs);
    }

    checkCollision(egg) {
        if (egg.pos[1] === 1053 || egg.pos[1] === 1052) {
            return this.score.broken -= 1;
        }

        if ((egg.pos[1] > 402 && egg.pos[1] < 442) && egg.pos[0] < 300) {
            if (this.basket.pos[1] === 430 && this.basket.pos[0] < 300) {
                this.score.count += 1;
                egg.pos[1] = 1001;
            }
        } else if (egg.pos[1] === 1000) {
            egg.pos[1] = 1002;
        } else if ((egg.pos[1] >= 442 && egg.pos[1] < 999) && egg.pos[0] < 300) { 
            egg.pos[1] = 1000;
        }

        if ((egg.pos[1] > 402 && egg.pos[1] < 442) && egg.pos[0] > 400) {
            if (this.basket.pos[1] === 430 && this.basket.pos[0] > 400) {
                this.score.count += 1;
                egg.pos[1] = 1001;
            }
        } else if (egg.pos[1] === 1000) {
            egg.pos[1] = 1002;
        } else if ((egg.pos[1] >= 442 && egg.pos[1] < 999) && egg.pos[0] > 400) {
            
            egg.pos[1] = 1000;
        }


       if (egg.pos[1] > 255 && egg.pos[1] < 290 && egg.pos[0] < 300) {
           if (this.basket.pos[1] === 280 && this.basket.pos[0] < 300) {
               this.score.count += 1
               egg.pos[1] = 1001;
            }
        } else if (egg.pos[1] === 1000) {
            egg.pos[1] = 1003;
        } else if (egg.pos[1] >= 290 && egg.pos[1] < 299 && egg.pos[0] < 300) {
            egg.pos[1] = 1000;
        }

        if (egg.pos[1] > 255 && egg.pos[1] < 290 && egg.pos[0] > 400) {
            if (this.basket.pos[1] === 280 && this.basket.pos[0] > 400) {
                this.score.count += 1
                egg.pos[1] = 1001;
            }
        } else if (egg.pos[1] === 1000) {
            egg.pos[1] = 1003;
        } else if (egg.pos[1] >= 290 && egg.pos[1] < 299 && egg.pos[0] > 400) {
            egg.pos[1] = 1000;
        }
    
    }

    draw() {
        return (this.score.broken <= 0);
    }

    step(x) {
        this.board.move();
        this.matroshka.move(x)
        this.basket.move(x);
        this.eggs.forEach(egg => {
            if (egg) {
                egg.move(this.speed);
                this.basket.move(x);
                this.checkCollision(egg);
                if (this.draw()) {
                  this.gameOver.move();
                }
                this.score.move();
            }
        });
    }

    shuffleEggs(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

   
}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/game_over.js":
/*!**************************!*\
  !*** ./src/game_over.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameOver {
    constructor(ctx) {
        this.ctx = ctx;
    }

    move() {
        this.ctx.font = "80px Arial";
        this.ctx.fillStyle = "darkred";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`Game Over`, 495, 250);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (GameOver);

/***/ }),

/***/ "./src/intro.js":
/*!**********************!*\
  !*** ./src/intro.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class Intro {
    constructor(ctx) {
       this.ctx = ctx;
    }
    
    move() {
        this.ctx.fillStyle = "darkred"; 
        this.ctx.fillRect(0,0,1000,1200); 
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./src/matroshka.js":
/*!**************************!*\
  !*** ./src/matroshka.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const matroshka = new Image();
matroshka.src = './images/matroshka.png'

class Matroshka  {
    constructor(ctx) {
        this.matroshka = matroshka;
        this.ctx = ctx;
    }

    drawMatroshka(x, y) {
        this.ctx.drawImage(this.matroshka, x, y, 140, 250)
    }

    move(direction) {
        if (direction === 1) {
            this.drawMatroshka(280, 280);
        } else if (direction === 2) {
            this.drawMatroshka(280, 280);
        } else if ( direction === 3) {
            this.drawMatroshka(580, 280);
        } else if (direction === 4) {
            this.drawMatroshka(580, 280);
        }
    }


}

/* harmony default export */ __webpack_exports__["default"] = (Matroshka);


/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const egg = new Image();
egg.src = './images/egg_one.png'

const egg_broken = new Image();
egg_broken.src = './images/broken_egg.png'

class Score {
    constructor(ctx, count, broken) {
        this.ctx = ctx;
        this.count = count;
        this.broken = broken
    }

    move() {
        this.ctx.drawImage(egg, 50, 15, 65, 65)
        this.ctx.font = "60px Comic Sans MS";
        this.ctx.fillStyle = "#8B0000";
        this.ctx.textAlign = "center";
        this.ctx.fillText(` ${this.count}`, 150, 70);
        
        if (this.broken === 2) {
            this.ctx.drawImage(egg_broken, 650, 15, 80, 80)
        } else if (this.broken === 1) {
            this.ctx.drawImage(egg_broken, 650, 15, 80, 80)
            this.ctx.drawImage(egg_broken, 750, 15, 80, 80)
        } else if (this.broken <= 0) {
            this.ctx.drawImage(egg_broken, 650, 15, 80, 80)
            this.ctx.drawImage(egg_broken, 750, 15, 80, 80)
            this.ctx.drawImage(egg_broken, 850, 15, 80, 80)

        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Score);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map