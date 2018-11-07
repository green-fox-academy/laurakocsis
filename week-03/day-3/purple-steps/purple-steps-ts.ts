'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let squareHeight: number = 10;

for (let i = 0; i < 30; i++) {
  diagonalSquares(i * squareHeight, i * squareHeight, squareHeight);
}

function diagonalSquares(x, y, xysize) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, xysize, xysize);
}