'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

for (let i = 0; i < 700; i++) {
  if (i === 0) {
    drawStars(0, 0, 'black', canvas.width);
  }
  else {
    drawStars(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 255, 2);
  }
}

function drawStars(x, y, color, size) {
  ctx.fillStyle = 'RGB('.concat(color).concat(',').concat(color).concat(',').concat(color).concat(')');
  ctx.fillRect(x, y, size, size);
}