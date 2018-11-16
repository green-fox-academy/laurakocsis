'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawFractal() {
  ctx.beginPath();
  ctx.moveTo(0, 300 - 300 * Math.sqrt(3) / 2);
  ctx.lineTo(canvas.width, 300 - 300 * Math.sqrt(3) / 2);
  ctx.lineTo(canvas.width / 2, 300 + 300 * Math.sqrt(3) / 2);
  ctx.lineTo(0, 300 - 300 * Math.sqrt(3) / 2);
  ctx.stroke();
  drawTriangles(150, 300, 300);
}

function drawTriangles(x, y, side) {
  ctx.strokeStyle = 'RGB(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + side / 2, y - side * Math.sqrt(3) / 2);
  ctx.lineTo(x + side, y);
  ctx.lineTo(x, y);
  ctx.stroke();
  if (side > 5) {
    drawTriangles(x - side / 4, y - (side * Math.sqrt(3) / 2) / 2, side / 2);
    drawTriangles(x + side - side / 4, y - (side * Math.sqrt(3) / 2) / 2, side / 2);
    drawTriangles(x + side / 4, y + (side * Math.sqrt(3) / 2) / 2, side / 2);
  }
}

drawFractal();
