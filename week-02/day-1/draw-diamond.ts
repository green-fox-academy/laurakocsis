'use strict';
export {}

let lineCount2: number = 7;
let star: string= "*";
let space: string= " ";
let addStars: string= "**";
let star2: string= "*";
let j: number = lineCount2 - 2;

for (let i: number = 0; i <= lineCount2; i++) {
    if (i <= lineCount2 / 2) {
        console.log((space.repeat((lineCount2 / 2) - i)) + star);
        star = star + addStars;
    }
    else {
        console.log(space.repeat((i + 1) - (lineCount2 / 2)) + (star2.repeat(j)));
        j = j - 2;
        if (j < 0) {
            break;
            }     
        }
}
