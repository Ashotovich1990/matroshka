import Board from './board'
import Matroshka from './matroshka';
import Basket from './basket';
import Chicken from './chicken';
import Kremlin from './kremlin';
import EggTopLeft from './eggs/top_left_egg';
import EggBottomLeft from './eggs/bottom_left_egg';
import EggTopRight from './eggs/top_right_egg';
import EggBottomRight from './eggs/bottom_right_egg';

export function Game() {
    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d'); 

    const chicken = new Image ();
    chicken.src = './images/chicken.png'

    const chickenRotate = new Image();
    chickenRotate.src = './images/chicken-rotate.png'

    const board = new Board(ctx);
    const matroshka = new Matroshka(ctx);
    const basket = new Basket(ctx);
    const chickenLeft = new Chicken(ctx, chicken, 10)
    const chickenRight = new Chicken(ctx, chickenRotate, 890)
    const kremlin = new Kremlin(ctx);
    const eggTopLeft = new EggTopLeft(ctx);
    const eggBottomLeft = new EggBottomLeft(ctx);
    const eggTopRight = new EggTopRight(ctx);
    const eggBottomRight = new EggBottomRight(ctx);
    const EGGS = [eggTopLeft, eggBottomLeft, eggTopRight, eggBottomRight]

    this.play = (x) => {
        board.move();
        matroshka.move(x)
        basket.move(x);
        chickenLeft.move();
        chickenRight.move();
        kremlin.move();
        EGGS.forEach(egg => egg.move(5));
    }
}