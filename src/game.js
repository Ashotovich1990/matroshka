import {createBoard} from './board'

export function Game() {
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
       return createBoard(move, chicken, chickenRotate, matroshka, kremlin, redStar)
    }
}