import Egg from './egg';

class EggBottomLeft extends Egg {
   constructor(ctx) {
      super();
      this.ctx = ctx;
      this.pos = [100, 300];
   }

   move(x) {
      if (this.pos[1] <= 333) {
         this.pos[0] += 0 * x;
         this.pos[1] += 0.1 * x;
         this.ctx.drawImage(this.imageOne, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 333 && this.pos[1] <= 350) {
         this.pos[0] += 0.1 * x;
         this.pos[1] += 0.06 * x;
         this.ctx.drawImage(this.imageTwo, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 350 && this.pos[1] <= 375) {
         this.pos[0] += 0.1 * x;
         this.pos[1] += 0.06 * x;
         this.ctx.drawImage(this.imageFour, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 375 && this.pos[1] <= 390) {
         this.pos[0] += 0.12 * x;
         this.pos[1] += 0.04 * x;
         this.ctx.drawImage(this.imageThree, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 390 && this.pos[1] <= 442) {
         this.pos[0] += 0 * x;
         this.pos[1] += 0.1 * x;
         this.ctx.drawImage(this.imageThree, this.pos[0], this.pos[1], 30, 30)
      } 

   }
  
  }
  
  export default EggBottomLeft;