'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawFractal() {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2 - canvas.height / 2 * Math.sqrt(3) / 2);
  ctx.lineTo(canvas.width, canvas.height / 2 - canvas.height / 2 * Math.sqrt(3) / 2);
  ctx.lineTo(canvas.width / 2, canvas.height / 2 + canvas.height / 2 * Math.sqrt(3) / 2);
  ctx.lineTo(0, canvas.height / 2 - canvas.height / 2 * Math.sqrt(3) / 2);
  ctx.stroke();
  drawTriangles(canvas.width / 4, canvas.height / 2, 300);
}

function drawTriangles(x, y, side) {
  ctx.strokeStyle = 'RGB(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + side / 2, y - side * Math.sqrt(3) / 2);
  ctx.lineTo(x + side, y);
  ctx.lineTo(x, y);
  ctx.stroke();
  if (side > 5) {
    setTimeout(() => {
      drawTriangles(x - side / 4, y - (side * Math.sqrt(3) / 2) / 2, side / 2)
    }, 600
    );
    setTimeout(() => {
      drawTriangles(x + side - side / 4, y - (side * Math.sqrt(3) / 2) / 2, side / 2)
    }, 1200
    );
    setTimeout(() => {
      drawTriangles(x + side / 4, y + (side * Math.sqrt(3) / 2) / 2, side / 2)
    }, 300
    );
  }
}

drawFractal();
