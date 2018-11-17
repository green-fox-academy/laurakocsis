'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawCarpet() {
  drawRectangles(canvas.width / 3, canvas.height / 3, canvas.width / 3);
}

function drawRectangles(x, y, side) {
  ctx.fillRect(x, y, side, side);
  if (side > 5) {
    drawRectangles(x + side + side / 3, y + side / 3, side / 3);
    drawRectangles(x + side / 3, y - 2 * side / 3, side / 3);
    drawRectangles(x - 2 * side / 3, y + side / 3, side / 3);
    drawRectangles(x + side / 3, y + side + side / 3, side / 3);
    drawRectangles(x - 2 * side / 3, y - 2 * side / 3, side / 3);
    drawRectangles(x + side + side / 3, y - 2 * side / 3, side / 3);
    drawRectangles(x - 2 * side / 3, y + side + side / 3, side / 3);
    drawRectangles(x + side + side / 3, y + side + side / 3, side / 3);
  }
}

drawCarpet();
