class Basket  {
    constructor(ctx) {
        this.ctx = ctx;
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

    move(direction) {
        if (direction === 1) {
            this.drawBasket(220, 280);
        } else if (direction === 2) {
            this.drawBasket(220, 420)
        } else if ( direction === 3) {
            this.drawBasket(760, 280);
        } else if (direction === 4) {
            this.drawBasket(760, 420)
        }
    }


}

export default Basket;