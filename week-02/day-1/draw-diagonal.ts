'use strict';
export {};

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is


let lineCount: number = 6;
let sides: string = "%";
let space: string= " ";

for (let i: number= 0; i < lineCount; i++) {
  if (i === 0 || i === lineCount - 1) {
      console.log(sides.repeat(lineCount));
  }
  else {
      console.log(sides + space.repeat(i - 1) + sides + space.repeat(lineCount - 2 - i) + sides);
  }
}