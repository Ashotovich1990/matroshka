const chicken = new Image ();
chicken.src = './images/chicken.png'

const chickenRotate = new Image();
chickenRotate.src = './images/chicken-rotate.png'


class Chicken {
    constructor(ctx, imgCode, x) {
       this.ctx = ctx;
       let img;
       if (imgCode === 1) {
           img = chicken;
       } else {
           img = chickenRotate;
       }
       this.image = img;
       this.x = x;
    }
    
    move() {
       this.ctx.drawImage(this.image, this.x, 110, 100, 100)
       this.ctx.drawImage(this.image, this.x, 260, 100, 100)   
    }

}

export default Chicken;