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
        this.ctx.fillRect(0,0,1000,1200);
        this.ctx.font = "30px Comic Sans MS";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText('RULES', 100, 150);
        this.ctx.fillText('Matroshka drops three eggs - you lose', 320, 200);
        this.ctx.fillText('Collect as many eggs as you can - Matroshka is immortal', 440, 250); 
        this.ctx.fillText('Press ‘A’ to catch the egg on the top left', 340, 300);
        this.ctx.fillText('Press ‘Z’ to catch the egg on the bottom left', 370, 350);
        this.ctx.fillText('Press ‘K’ to catch the egg on the top right', 350, 400);
        this.ctx.fillText('Press ‘M’ to catch the egg on the bottom right', 380, 450); 
        setTimeout(() => {
            this.ctx.drawImage(this.basket, 750, 350, 80, 80)
            this.ctx.drawImage(this.matroshka, 830, 210, 140, 250)
        }, 40)
    }

}

export default Intro;