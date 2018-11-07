'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

let squareNum: number = 3;

for (let i = 0; i < squareNum; i++) {
  drawSquare(10 + i * 100, 10 + i * 100);
}

function drawSquare(x, y) {
  ctx.strokeStyle = 'green';
  ctx.strokeRect(x, y, 50, 50);
}