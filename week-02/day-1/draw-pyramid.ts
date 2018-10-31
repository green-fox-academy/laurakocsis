'use strict';
export {}

let lineCount: number = 4;
let star: string= "*";
let space: string= " ";
let addStars: string= "**";

for (let i: number = 0; i < lineCount; i++) {
    console.log((space.repeat(lineCount - i)) + star);
    star = star + addStars;
}