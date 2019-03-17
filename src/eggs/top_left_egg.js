import Egg from './egg';

class EggTopLeft extends Egg {
   constructor(ctx) {
      super()
      this.ctx = ctx;
      this.pos = [100, 150];
   }

   move(x) {
      if (this.pos[1] <= 186) {
         this.pos[0] += 0 * x;
         this.pos[1] += 0.1 * x;
         this.ctx.drawImage(this.imageTwo, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 186 && this.pos[1] <= 200) {
         this.pos[0] += 0.1 * x;
         this.pos[1] += 0.07 * x;
         this.ctx.drawImage(this.imageOne, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 200 && this.pos[1] <= 235) {
         this.pos[0] += 0.13 * x;
         this.pos[1] += 0.06 * x;
         this.ctx.drawImage(this.imageFour, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 235 && this.pos[1] <= 239) {
         this.pos[0] += 0.13 * x;
         this.pos[1] += 0.04 * x;
         this.ctx.drawImage(this.imageFour, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 239 && this.pos[1] <= 290) {
         this.pos[0] += 0 * x;
         this.pos[1] += 0.1 * x;
         this.ctx.drawImage(this.imageThree, this.pos[0], this.pos[1], 30, 30)
      }
      
   }

}

export default EggTopLeft;
