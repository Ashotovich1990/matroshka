import Game from './game';
import {playAudio} from './audio';
import Intro from './intro';
import {throttle} from './util/throttle_keypress';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d'); 
    playAudio();
    let y = 1;

    setInterval(()=> {
       if (y === 4) y = 0;
       y += 1;
    }, 1200)
    
    let stopIntro = false;
    function loopIntro() {
        if (stopIntro) return cancelAnimationFrame(loopIntro);
        requestAnimationFrame(loopIntro);
        intro.move(y)
    }

    const intro = new Intro(ctx);
    loopIntro();

    document.getElementById("play").addEventListener("click", () => {
        stopIntro = true;
        let x;
        const game = new Game(ctx);
        loop()
        
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
        }, 40));
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