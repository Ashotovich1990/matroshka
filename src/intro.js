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
    
    move() {
        this.ctx.fillStyle = "darkred"; 
        this.ctx.fillRect(0,0,1000,440);
        this.ctx.font = "30px Comic Sans MS";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText('RULES', 100, 70);
        this.ctx.fillText('Matroshka drops three eggs - you lose', 320, 120);
        this.ctx.fillText('Collect as many eggs as you can - Matroshka is immortal', 440, 170); 
        this.ctx.fillText('Press ‘A’ to catch the egg on the top left', 340, 220);
        this.ctx.fillText('Press ‘Z’ to catch the egg on the bottom left', 370, 270);
        this.ctx.fillText('Press ‘K’ to catch the egg on the top right', 350, 320);
        this.ctx.fillText('Press ‘M’ to catch the egg on the bottom right', 380, 370); 
        setTimeout(() => {
            this.ctx.drawImage(this.basket, 740, 295, 80, 80)
            this.ctx.drawImage(this.matroshka, 830, 130, 140, 250)
        }, 50)
    }

}

export default Intro;