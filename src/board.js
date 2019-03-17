import Chicken from './chicken';

const moscow = new Image();
moscow.src = './images/moscow.png'

class Board {
   constructor(ctx) {
       this.ctx = ctx;
       this.chickenLeft = new Chicken(this.ctx, 1, 10)
       this.chickenRight = new Chicken(this.ctx, 2, 890)
    }
    
    move()  {
        this.ctx.drawImage(moscow,0,0, 1000, 600);
        this.ctx.beginPath();
        this.ctx.moveTo(0,200)
        this.ctx.lineTo(80,200)
        this.ctx.lineTo(170,250)
        this.ctx.strokeStyle = '#912903'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(0,350)
        this.ctx.lineTo(80,350)
        this.ctx.lineTo(170,400)
        this.ctx.strokeStyle = '#912903'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(1000,350)
        this.ctx.lineTo(920,350)
        this.ctx.lineTo(830,400)
        this.ctx.strokeStyle = '#912903'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(1000,200)
        this.ctx.lineTo(920,200)
        this.ctx.lineTo(830,250)
        this.ctx.strokeStyle = '#912903'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();
        
        this.chickenLeft.move();
        this.chickenRight.move();
    }
}

export default Board;

