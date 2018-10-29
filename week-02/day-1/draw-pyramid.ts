'use strict';
export {}

let lineCount2: number = 4;
let star: string= "*";
let space: string= " ";
let addStars: string= "**";

for (let i: number = 1; i <= lineCount2; i++) {
    console.log((space.repeat(lineCount2 - i)) + star);
    star = star + addStars;
}