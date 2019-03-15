import {Game} from './game'

document.addEventListener("DOMContentLoaded", () => {
   let x;
   const game = new Game();
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
   function loop() {
    requestAnimationFrame(loop);
    game.play(x);
   }
});