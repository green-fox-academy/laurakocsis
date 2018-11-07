'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let numberSquares: number = 7;
let rainbowColors: string [] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for (let i = 0; i < numberSquares; i++) {
  rainbow(300 - i * 40, rainbowColors[i]);
}

function rainbow(size, fillColor) {
  ctx.fillStyle = fillColor;
  ctx.fillRect((canvas.width/2) - (size/2), (canvas.height/2) - (size/2), size, size);
}