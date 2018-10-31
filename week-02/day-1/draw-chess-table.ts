'use strict';
export {}

// Create a program that draws a chess table

let lineCount: number = 8;
let black: string = "%";
let white: string = " ";

for (let i = 0; i < lineCount; i++) {
  if (i % 2 === 0) {
    console.log((black + white).repeat(lineCount/2));
  }
  else {
    console.log((white + black).repeat(lineCount/2));
  }
}