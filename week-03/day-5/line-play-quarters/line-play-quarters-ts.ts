'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let divisions = 4;
for (let row = 0; row < divisions; row++) {
  for (let culomn = 0; culomn < divisions; culomn++)
    for (let i = 0; i < 15; i++) {
      drawLines(
        ((100 + ((canvas.width - 100) / 15 * i)) / divisions) + row * canvas.width / divisions,
        0 + culomn * canvas.height / divisions,
        canvas.width / divisions + row * canvas.width / divisions,
        (((canvas.height - 100) / 15) + (canvas.height - 100) / 15 * i) / divisions + culomn * canvas.height / divisions,
        'purple');
      drawLines(
        0 + culomn * canvas.width / divisions,
        (100 + ((canvas.height - 100) / 15 * i)) / divisions + row * canvas.height / divisions,
        (((canvas.width - 100) / 15) + (canvas.width - 100) / 15 * i) / divisions + culomn * canvas.width / divisions,
        canvas.height / divisions + row * canvas.height / divisions,
        'green');
    }
}

function drawLines(xStart, yStart, x, y, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(x, y);
  ctx.stroke();
}