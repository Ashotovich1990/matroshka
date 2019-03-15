import Board from './board'
import Matroshka from './matroshka';
import Basket from './basket';
import Chicken from './chicken';
import Kremlin from './kremlin';

export function Game() {
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

    const board = new Board(ctx, chicken, chickenRotate);
    const matroshka = new Matroshka(ctx, matroshkaPic);
    const basket = new Basket(ctx);
    const chickenLeft = new Chicken(ctx, chicken, 10)
    const chickenRight = new Chicken(ctx, chickenRotate, 890)
    const kremlin = new Kremlin(ctx, kremlinPic);

    this.play = (x) => {
        board.move();
        matroshka.move(x)
        basket.move(x);
        chickenLeft.move();
        chickenRight.move();
        kremlin.move();
    }
}