
class Intro {
    constructor(ctx) {
       this.ctx = ctx;
    }
    
    move() {
        this.ctx.fillStyle = "darkred"; 
        this.ctx.fillRect(0,0,1000,1200); 
    }

}

export default Intro;