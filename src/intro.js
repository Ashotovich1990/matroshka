
class Intro {
    constructor(ctx) {
       this.ctx = ctx;
    }
    
    move() {
        this.ctx.fillStyle = "darkred"; 
        this.ctx.fillRect(0,0,1000,1200);
        this.ctx.font = "30px Comic Sans MS";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText('Rules Matroshka drops three eggs - you lose', 360, 90);
        this.ctx.fillText('Collect as many as eggs as you can - Matroshka is immortal', 460, 150); 
        this.ctx.fillText('Press ‘A’ to fetch the egg on the top left', 340, 210);
        this.ctx.fillText('Press ‘Z’ to fetch the egg on the bottom left', 370, 270);
        this.ctx.fillText('Press ‘K’ to fetch the egg on the top right', 350, 330);
        this.ctx.fillText('Press ‘M’ to fetch the egg on the bottom right', 380, 390); 
    }

}

export default Intro;