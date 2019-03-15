const kremlin = new Image();
kremlin.src = './images/kremlin.png'

class Kremlin {
    constructor(ctx) {
        this.ctx = ctx;
        this.image = kremlin
    }

    move() {
        this.ctx.drawImage(this.image, 450, 200, 100, 200) 
    }
}

export default Kremlin;