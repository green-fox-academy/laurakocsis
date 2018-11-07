'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Fill the canvas with a checkerboard pattern.

let checkcolor = ['black', 'white'];

for (let i = 0; i < 10; i++) {
  for ( let j = 0; j < 15; j++) {
    if ((i + j) % 2) {
      checkBoard(j * canvas.width/15, i * canvas.height/10, 40);
    }
  }
}

function checkBoard (x, y, size) {
  ctx.fillStyle = 'black';
  ctx.fillRect(x, y, size, size);
}