'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for (let i = 0; i < 15; i++) {
  drawLines(
    100 + ((canvas.width - 100) / 15 * i),
    0,
    canvas.width,
    (((canvas.height - 100) / 15) + (canvas.height - 100) / 15 * i),
    'purple');
  drawLines(
    0,
    100 + ((canvas.height - 100) / 15 * i),
    (((canvas.width - 100) / 15) + (canvas.width - 100) / 15 * i),
    canvas.height,
    'green');
}

function drawLines(xStart, yStart, x, y, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(x, y);
  ctx.stroke();
}