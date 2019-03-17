class GameOver {
    constructor(ctx) {
        this.ctx = ctx;
    }

    move() {
        this.ctx.font = "80px Arial";
        this.ctx.fillStyle = "darkred";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`Game Over`, 495, 250);
    }
}

export default GameOver;