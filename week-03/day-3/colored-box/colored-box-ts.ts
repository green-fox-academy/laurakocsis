'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo(50, 50);

ctx.strokeStyle = 'red';
ctx.lineTo(250, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 50);
ctx.strokeStyle = 'green';
ctx.lineTo(250, 250);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 250);
ctx.strokeStyle = 'orange';
ctx.lineTo(50, 250);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 250);
ctx.strokeStyle = 'blue';
ctx.lineTo(50, 50);
ctx.stroke();