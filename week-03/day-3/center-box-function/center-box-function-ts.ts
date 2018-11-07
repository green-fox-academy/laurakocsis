'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let squares: number = 3;

for (let i = 0; i < squares; i++) {
  makeSquare(10 + 50 * i);
}

function makeSquare(xy) {
  ctx.strokeStyle = 'red';
  ctx.strokeRect((canvas.width/2) - (xy/2), (canvas.height/2) - (xy/2), xy, xy);
}