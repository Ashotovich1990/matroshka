import Egg from './egg';

class EggBottomRight extends Egg {
   constructor(ctx) {
      super()
      this.ctx = ctx;
      this.pos = [870, 300];
   }

   move(x) {
      if (this.pos[1] <= 337) {
         this.pos[0] += 0 * x;
         this.pos[1] += 0.1 * x;
         this.ctx.drawImage(this.imageFour, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 337 && this.pos[1] <= 350) {
         this.pos[0] -= 0.1 * x;
         this.pos[1] += 0.06 * x;
         this.ctx.drawImage(this.imageOne, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 350 && this.pos[1] <= 385) {
         this.pos[0] -= 0.12 * x;
         this.pos[1] += 0.06 * x;
         this.ctx.drawImage(this.imageTwo, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 385 && this.pos[1] <= 390) {
         this.pos[0] -= 0.12 * x;
         this.pos[1] += 0.04 * x;
         this.ctx.drawImage(this.imageTwo, this.pos[0], this.pos[1], 30, 30)
      } else if (this.pos[1] > 390 && this.pos[1] <= 442) {
        this.pos[0] += 0 * x;
        this.pos[1] += 0.1 * x;
        this.ctx.drawImage(this.imageThree, this.pos[0], this.pos[1], 30, 30)
     } else if (this.pos[1] > 1001 && this.pos[1] < 1200) {
         this.ctx.drawImage(this.imageSix, 750, 550, 30, 30)
         this.pos[1] += 5
     }
      
   }

}

export default EggBottomRight;