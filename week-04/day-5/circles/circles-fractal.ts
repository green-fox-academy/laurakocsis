'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawFractal() {
  drawCircle(300, 300, 300);
}

function drawCircle(x: number, y: number, radius: number) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  if (radius > 10) {
    drawCircle(x - (Math.sin(Math.PI / 3) * radius / 2), y + (Math.cos(Math.PI / 3) * radius / 2), radius / 2);
    drawCircle(x + (Math.sin(Math.PI / 3) * radius / 2), y + (Math.cos(Math.PI / 3) * radius / 2), radius / 2);
    drawCircle(x, y - radius / 2, radius / 2);
  }
}

drawFractal();
