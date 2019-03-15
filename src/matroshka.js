const matroshka = new Image();
matroshka.src = './images/matroshka.png'

class Matroshka  {
    constructor(ctx) {
        this.matroshka = matroshka;
        this.ctx = ctx;
    }

    drawMatroshka(x, y) {
        this.ctx.drawImage(this.matroshka, x, y, 140, 250)
    }

    move(direction) {
        if (direction === 1) {
            this.drawMatroshka(280, 280);
            // drawBasket(220, 280);
        } else if (direction === 2) {
            this.drawMatroshka(280, 280);
            // drawBasket(220, 420)
        } else if ( direction === 3) {
            this.drawMatroshka(580, 280);
            // drawBasket(760, 280);
        } else if (direction === 4) {
            this.drawMatroshka(580, 280);
            // drawBasket(760, 420)
        }
    }


}

export default Matroshka;
