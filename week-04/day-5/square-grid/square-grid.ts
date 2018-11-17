'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquareGrid() {
  drawBackground();
  drawSquares(canvas.width / 4, canvas.height / 4, canvas.width / 2, 20);
}


function drawBackground() {
  ctx.fillStyle = 'darkgreen';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSquares(x, y, side, thickness) {
  ctx.strokeStyle = 'white';
  ctx.lineWidth = thickness;
  ctx.strokeRect(x, y, side, side);
  if (side > 20) {
    drawSquares(x - side / 4, y - side / 4, side / 2, thickness / 2);
    drawSquares(x - side / 4, y + side - side / 4, side / 2, thickness / 2);
    drawSquares(x + side - side / 4, y - side / 4, side / 2, thickness / 2);
    drawSquares(x + side - side / 4, y + side - side / 4, side / 2, thickness / 2);
  }
}

drawSquareGrid();
