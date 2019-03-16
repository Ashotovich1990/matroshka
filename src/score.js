const egg = new Image();
egg.src = './images/egg_one.png'

const egg_broken = new Image();
egg_broken.src = './images/broken_egg.png'

class Score {
    constructor(ctx, count, broken) {
        this.ctx = ctx;
        this.count = count;
        this.broken = broken
    }

    move() {
        this.ctx.drawImage(egg, 50, 15, 65, 65)
        this.ctx.font = "60px Comic Sans MS";
        this.ctx.fillStyle = "#8B0000";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`${this.count}`, 150, 70);
        
        if (this.broken === 2) {
            this.ctx.drawImage(egg_broken, 650, 15, 80, 80)
        } else if (this.broken === 1) {
            this.ctx.drawImage(egg_broken, 650, 15, 80, 80)
            this.ctx.drawImage(egg_broken, 750, 15, 80, 80)
        } else if (this.broken <= 0) {
            this.ctx.drawImage(egg_broken, 650, 15, 80, 80)
            this.ctx.drawImage(egg_broken, 750, 15, 80, 80)
            this.ctx.drawImage(egg_broken, 850, 15, 80, 80)

        }
    }
}

export default Score;