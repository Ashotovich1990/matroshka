import Game from './game';
import {playAudio} from './audio';
import Intro from './intro';
import {throttle} from './util/throttle_keypress';

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
        
        // document.getElementById("left-up-button").addEventListener("click", () => {
        //     x = 1;
        // })

        // document.getElementById("left-bottom-button").addEventListener("click", () => {
        //     x = 2;
        // })

        // document.getElementById("right-bottom-button").addEventListener("click", () => {
        //     x = 4;
        // })

        // document.getElementById("right-up-button").addEventListener("click", () => {
        //     x = 3;
        // })

        document.addEventListener('keypress', throttle(event => {
            if (event.code === "KeyA") {
                x = 1;
            } else if (event.code === "KeyZ") {
                x = 2;
            } else if (event.code === "KeyK") {
                x = 3;
            } else if (event.code === "KeyM") {
                x = 4;
            }
        }, 80));
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