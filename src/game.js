import Board from './board'
import Matroshka from './matroshka';
import Basket from './basket';
import EggTopLeft from './eggs/top_left_egg';
import EggBottomLeft from './eggs/bottom_left_egg';
import EggTopRight from './eggs/top_right_egg';
import EggBottomRight from './eggs/bottom_right_egg';
import Score from './score';
import GameOver from './game_over';

class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.board = new Board(this.ctx);
        this.matroshka = new Matroshka(this.ctx);
        this.basket = new Basket(this.ctx);
        this.eggBottomLeft = new EggTopLeft(this.ctx);
        this.score = new Score(this.ctx, 0, 3);
        this.gameOver = new GameOver(this.ctx);
        this.eggs = [];
        this.checkCollision = this.checkCollision.bind(this);
        this.speed = 6;
    }

    fillHans() {
        setInterval(() => {
            let chance = Math.random();
            let eggTopLeft;
            let eggBottomLeft;
            let eggTopRight;
            let eggBottomRight;
            if (chance >= 0.750) {
                eggTopLeft = new EggTopLeft(this.ctx);
            } else if (chance >= 0.500 && chance < 0.750) {
                eggBottomLeft = new EggBottomLeft(this.ctx);
            } else if (chance >= 0.250 && chance < 0.500) {
                eggTopRight = new EggTopRight(this.ctx);
            } else {
                eggBottomRight = new EggBottomRight(this.ctx);
            }
            this.eggs = this.eggs.concat([eggTopLeft, eggBottomLeft, eggTopRight,eggBottomRight])
        }, 1000)
    }

    checkCollision(egg) {
        if ((egg.pos[1] > 402 && egg.pos[1] < 442) && egg.pos[0] < 300) {
            if (this.basket.pos[1] === 430 && this.basket.pos[0] < 300) {
                this.score.count += 1;
                egg.pos[1] = 1001;
            }
        } else if (egg.pos[1] === 1000) {
            this.score.broken -= 1 
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
            this.score.broken -= 1 
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
            this.score.broken -= 1 
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
            this.score.broken -= 1 
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

   
}

export default Game;
