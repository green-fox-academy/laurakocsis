'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let box = [[10, 10], [290,  10], [290, 290], [10, 290]];
let fox = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];


function dotConnecting(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(arr[i][0], arr[i][1]);
    ctx.lineTo(arr[j][0], arr[j][1]);
    ctx.stroke();
  }
}
dotConnecting(box);
dotConnecting(fox);