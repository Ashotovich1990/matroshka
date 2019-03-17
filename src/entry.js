import Game from './game';
import {playAudio} from './audio';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d'); 
    playAudio();

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
        
    
        setInterval(() => {
            if (game.speed < 20) {
                game.speed += 0.1;
            }
        }, 1000) 
        
        game.fillHans();

        function loop() {
            if (game.score.broken <= 0) {
                return cancelAnimationFrame(loop);
            }
            requestAnimationFrame(loop);
            game.step(x);
        } 
    });

});