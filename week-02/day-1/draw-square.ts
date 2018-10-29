'use strict';
export {}

let lineCount: number = 6;
let sides: string = "%"
let space: string= " "

for (let i: number= 0; i < lineCount; i++) {
    if (i == 0 || i == lineCount - 1) {
        console.log(sides.repeat(lineCount));
    }
    else {
        console.log(sides + space.repeat(lineCount - 2) + sides);
    }
}