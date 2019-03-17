const image = new Image();
image.src = './images/basket.png'

class Basket  {
    constructor(ctx) {
        this.ctx = ctx;
        this.image = image;
        this.pos = [];
    }

    drawBasket(x,y) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(x + 50, y)
        this.ctx.lineTo(x + 20, y + 50)
        this.ctx.lineTo(x, y + 50)
        this.ctx.lineTo(x - 30, y)
        this.ctx.lineTo(x, y)
        this.ctx.strokeStyle = '#8B0000'
        this.ctx.lineWidth = 12
        this.ctx.stroke();
        this.ctx.closePath();
    }
    
    drawBasket(x,y) {
        this.ctx.drawImage(this.image, x, y, 80, 80)
    }

    move(direction) {
        if (direction === 1) {
            this.pos = [200,280];
            this.drawBasket(...this.pos);
        } else if (direction === 2) {
            this.pos = [200,430];
            this.drawBasket(...this.pos)
        } else if ( direction === 3) {
            this.pos = [720,280];
            this.drawBasket(...this.pos);
        } else if (direction === 4) {
            this.pos = [720,430]
            this.drawBasket(...this.pos)
        }
    }


}

export default Basket;