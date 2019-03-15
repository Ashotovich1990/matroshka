// import {redStars} from './red_stars';

export const createBoard = (direction, chicken, chickenRotate, matroshka, kremlin) => {
    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d'); 
    ctx.fillStyle = "#D8D8D8"; 
    ctx.fillRect(0,0,1000,1200); 
   
    ctx.beginPath();
    ctx.moveTo(0,200)
    ctx.lineTo(80,200)
    ctx.lineTo(170,250)
    ctx.strokeStyle = '#a17f1a'
    ctx.lineWidth = 12
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0,350)
    ctx.lineTo(80,350)
    ctx.lineTo(170,400)
    ctx.strokeStyle = '#a17f1a'
    ctx.lineWidth = 12
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(1000,350)
    ctx.lineTo(920,350)
    ctx.lineTo(830,400)
    ctx.strokeStyle = '#a17f1a'
    ctx.lineWidth = 12
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(1000,200)
    ctx.lineTo(920,200)
    ctx.lineTo(830,250)
    ctx.strokeStyle = '#a17f1a'
    ctx.lineWidth = 12
    ctx.stroke();
    ctx.closePath();

    function draw(ctx, image) {
            ctx.drawImage(image, 10, 100, 100, 100)
            ctx.drawImage(image, 10, 250, 100, 100)   
    }

    function drawRotate(ctx, image) {
            ctx.drawImage(image, 890, 100, 100, 100)
            ctx.drawImage(image, 890, 250, 100, 100)
      
    }

    function drawMatroshka(ctx, image, x, y) {
            ctx.drawImage(image, x, y, 140, 250)
    }

    function drawKremlin(ctx, image) {
        ctx.drawImage(image, 450, 200, 100, 200)
    }

    draw(ctx,chicken);
    drawRotate(ctx,chickenRotate);
    drawKremlin(ctx, kremlin);
   
    

    function drawBasket(x,y) {
        ctx.beginPath();
        ctx.moveTo(x, y)
        ctx.lineTo(x + 50, y)
        ctx.lineTo(x + 20, y + 50)
        ctx.lineTo(x, y + 50)
        ctx.lineTo(x - 30, y)
        ctx.lineTo(x, y)
        ctx.strokeStyle = '#8B0000'
        ctx.lineWidth = 12
        ctx.stroke();
        ctx.closePath();
    }

    if (direction === 1) {
        drawMatroshka(ctx, matroshka, 280, 280);
        drawBasket(220, 280);
    } else if (direction === 2) {
        drawMatroshka(ctx, matroshka, 280, 280);
        drawBasket(220, 420)
    } else if ( direction === 3) {
        drawMatroshka(ctx, matroshka, 580, 280);
        drawBasket(760, 280);
    } else if (direction === 4) {
        drawMatroshka(ctx, matroshka, 580, 280);
        drawBasket(760, 420)
    }
}