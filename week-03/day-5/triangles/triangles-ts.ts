'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for (let i = 0; i < 20; i++) {
  let lineDistance: number = 30;
  let maxSide: number = 20 * lineDistance;
  let triangleHeight: number = lineDistance * Math.sqrt(3) / 2;
  let maxHeight: number = triangleHeight * 20;
  drawPyramidLines(i * lineDistance, maxSide, maxSide / 2 + (i * (lineDistance / 2)), maxSide - (maxHeight - (i * triangleHeight)));
  drawPyramidLines(maxSide - i * lineDistance, maxSide, maxSide / 2 - (i * (lineDistance / 2)), maxSide - (maxHeight - (i * triangleHeight)));
  drawPyramidLines(i * (lineDistance / 2), maxSide - (i * triangleHeight), maxSide - (i * lineDistance / 2), maxSide - (i * triangleHeight));
}

function drawPyramidLines(xStart, yStart, x, y) {
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(x, y);
  ctx.stroke();
}
