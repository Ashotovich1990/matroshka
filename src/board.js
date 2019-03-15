class Board {
   constructor(ctx, chicken, chickenRotate, kremlin) {
        this.ctx = ctx;
        this.chicken = chicken;
        this.chickenRotate = chickenRotate;
        this.kremlin = kremlin;
   }


    move()  {
        this.ctx.fillStyle = "#D8D8D8"; 
        this.ctx.fillRect(0,0,1000,1200); 
        this.ctx.beginPath();
        this.ctx.moveTo(0,200)
        this.ctx.lineTo(80,200)
        this.ctx.lineTo(170,250)
        this.ctx.strokeStyle = '#a17f1a'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(0,350)
        this.ctx.lineTo(80,350)
        this.ctx.lineTo(170,400)
        this.ctx.strokeStyle = '#a17f1a'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(1000,350)
        this.ctx.lineTo(920,350)
        this.ctx.lineTo(830,400)
        this.ctx.strokeStyle = '#a17f1a'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(1000,200)
        this.ctx.lineTo(920,200)
        this.ctx.lineTo(830,250)
        this.ctx.strokeStyle = '#a17f1a'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

export default Board;

