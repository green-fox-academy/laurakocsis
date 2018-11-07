'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

for (let i = 0; i < 5; i++) {
  steps3d((2 ** i) * 10,(2 ** i) * 10, (2 ** i) * 10);
}

function steps3d(x, y, size) {  
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, size, size);
}