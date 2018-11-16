'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawFractal() {
  drawHexagon(canvas.width / 4, 40, 300);
}

function drawHexagon(x, y, side) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + side, y);
  ctx.lineTo(x + side + Math.sin(Math.PI / 6) * side, y + Math.cos(Math.PI / 6) * side);
  ctx.lineTo(x + side, y + 2 * (Math.cos(Math.PI / 6) * side));
  ctx.lineTo(x, y + 2 * (Math.cos(Math.PI / 6) * side));
  ctx.lineTo(x - Math.sin(Math.PI / 6) * side, y + Math.cos(Math.PI / 6) * side);
  ctx.lineTo(x, y);
  ctx.stroke();
  if (side > 5) {
    drawHexagon(x, y, side / 3);
    drawHexagon(x + (2 * side / 3), y, side / 3);
    drawHexagon(x - (side / 3), y + 2 * side / 3 * (Math.sin(Math.PI / 3)), side / 3);
    drawHexagon(x, y + 4 * side / 3 * (Math.sin(Math.PI / 3)), side / 3);
    drawHexagon(x + (2 * side / 3), y + 4 * side / 3 * (Math.sin(Math.PI / 3)), side / 3);
    drawHexagon(x + (3 * side / 3), y + 2 * side / 3 * (Math.sin(Math.PI / 3)), side / 3);
  }
}

drawFractal();
