import Game from './game';
import {playAudio} from './audio';
import Intro from './intro';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d'); 
    playAudio();

    const intro = new Intro(ctx);
    intro.move();

    document.getElementById("play").addEventListener("click", () => {
        let x;
        const game = new Game(ctx);
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
        setInterval(() => {
            if (game.speed < 20) {
                game.speed += 0.05;
            }
            game.fillHans(level);
        }, 2000) 

        setInterval(() => {
            level += 1;
        }, 50000) 

        function loop() {
            if (game.score.broken <= 0) {
                return cancelAnimationFrame(loop);
            }
            requestAnimationFrame(loop);
            game.step(x);
        } 
    });

});