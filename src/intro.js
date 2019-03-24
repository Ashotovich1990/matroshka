const matrohska = new Image();
matrohska.src = './images/matroshka.png'

const basket = new Image();
basket.src = './images/basket.png'

class Intro {
    constructor(ctx) {
       this.ctx = ctx;
       this.matroshka = matrohska;
       this.basket = basket;
    }
    
    move(pos) {
        this.ctx.fillStyle = "darkred"; 
        this.ctx.fillRect(0,0,1000,800);
        this.ctx.font = "30px Comic Sans MS";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText('RULES', 150, 70);
        this.ctx.fillText('* Matroshka drops three eggs - you lose', 370, 120);
        this.ctx.fillText('* Collect as many eggs as you can - Matroshka is immortal', 490, 170);
        this.ctx.fillText(`* To move Matroshka: press on your keyboard`, 408, 220);
        this.ctx.font = "45px Comic Sans MS";
        if (pos === 1) {
            this.ctx.fillText('‘A’', 480, 280);
            this.ctx.drawImage(this.basket, 100, 300, 80, 80)
            this.ctx.drawImage(this.matroshka, 180, 300, 140, 250)
        } else if (pos === 2) {
            this.ctx.fillText('‘Z’', 480, 280);
            this.ctx.drawImage(this.basket, 100, 450, 80, 80)
            this.ctx.drawImage(this.matroshka, 180, 300, 140, 250)
        } else if (pos === 3) {
            this.ctx.fillText('‘M’', 480, 280);
            this.ctx.drawImage(this.basket, 820, 450, 80, 80)
            this.ctx.drawImage(this.matroshka, 680, 300, 140, 250)
        } else if (pos === 4) {
            this.ctx.fillText('‘K’', 480, 280);
            this.ctx.drawImage(this.basket, 820, 300, 80, 80)
            this.ctx.drawImage(this.matroshka, 680, 300, 140, 250)
        }

    }

}

export default Intro;