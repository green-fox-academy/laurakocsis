'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

for (let i = 0; i <= canvas.width; i+= 20) {
  for (let j = 0; j <= canvas.height; j+= 20) {
    if (i === 0 || i === canvas.width || j === 0 || j === canvas.height) {
      drawLines(i, j);
    }
  }
}

function drawLines (x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width/2, canvas.height/2);
  ctx.stroke();
}

/* Solution 2
for (let i = 0; i < canvas.width/20 + 1; i++) {
  let xopposite = [0, canvas.height]
  for (let j = 0; j < xopposite.length; j++) {
    drawLines(i * 20, xopposite[j]);
  }
}

for (let k = 0; k < canvas.height/20 + 1; k++) {
  let yopposite = [0, canvas.width]
  for (let l = 0; l < yopposite.length; l++) {
    drawLines(yopposite[l], k * 20);
  }
}
*/