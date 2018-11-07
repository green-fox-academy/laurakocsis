'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw four different size and color rectangles.
// Avoid code duplication.

let rectNum: number = 4;
let colors: string [] = ['red', 'blue', 'green', 'purple'];

for (let i = 0; i < rectNum; i++) {
  drawRect(10 + i * 40, 10 + i * 30, 10 + i * 10, 10 + i * 10, colors[i])
}

function drawRect(startx, starty, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(startx, starty, x, y);
}