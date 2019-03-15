class Chicken {
    constructor(ctx, image, x) {
       this.ctx = ctx;
       this.image = image;
       this.x = x;
    }
    
    move() {
       this.ctx.drawImage(this.image, this.x, 100, 100, 100)
       this.ctx.drawImage(this.image, this.x, 250, 100, 100)   
    }

}

export default Chicken;