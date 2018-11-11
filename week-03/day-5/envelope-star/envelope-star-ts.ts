'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const lineDistance: number = canvas.width / 2 / 15;

for (let i = 0; i < 15; i++) {
  drawLines(i * lineDistance, canvas.height / 2, canvas.width / 2, canvas.height / 2 + i * lineDistance);
  drawLines(canvas.width / 2 - i * lineDistance, canvas.height / 2, canvas.width / 2, i * lineDistance);
  drawLines(canvas.width - i * lineDistance, canvas.height / 2, canvas.width / 2, canvas.height / 2 - i * lineDistance);
  drawLines(canvas.width / 2, canvas.height - i * lineDistance, canvas.width / 2 + i * lineDistance, canvas.height / 2);
}

function drawLines(xStart, yStart, x, y) {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(x, y);
  ctx.stroke();
}
