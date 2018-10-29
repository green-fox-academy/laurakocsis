'use strict';

let lineCount: number = 4;
let star: string = "*"
let star2: string = "*"

for (let i: number = 0; i < lineCount; i++) {
    console.log(star);
    star = star + star2;
}