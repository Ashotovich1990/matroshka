class Kremlin {
    constructor(ctx, image) {
        this.ctx = ctx;
        this.image = image;
    }

    move() {
        this.ctx.drawImage(this.image, 450, 200, 100, 200) 
    }
}

export default Kremlin;