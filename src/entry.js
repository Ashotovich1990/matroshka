import Game from './game'

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d'); 

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

    game.fillHans();
    
    function loop() {
        requestAnimationFrame(loop);
        game.step(x);
    }
});