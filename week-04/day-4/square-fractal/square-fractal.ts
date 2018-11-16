'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function squareFractal() {
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, 600, 600);
  drawSquare(canvas.width / 3, 0, 200);
  drawSquare(0, canvas.height / 3, 200);
  drawSquare(2 * canvas.width / 3, canvas.height / 3, 200);
  drawSquare(canvas.width / 3, 2 * canvas.height / 3, 200);

}

function drawSquare(startx, starty, x) {
  ctx.strokeRect(startx, starty, x, x);
  if (x > 5) {
    drawSquare(startx + x / 3, starty, x / 3);
    drawSquare(startx, starty + x / 3, x / 3);
    drawSquare(startx + x / 3, starty + 2 * x / 3, x / 3);
    drawSquare(startx + 2 * x / 3, starty + x / 3, x / 3);
  }
}

squareFractal();
