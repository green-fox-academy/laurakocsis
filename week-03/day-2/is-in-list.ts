'use strict';
export {};

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let numsToCheck: number = 4;

function checkNums(arr: number []) {
  if ((arr.some(e => e === numsToCheck)) && 
  (arr.some(e => e === numsToCheck * 2)) &&
  (arr.some(e => e === numsToCheck * 3)) &&
  (arr.some(e => e === numsToCheck * 4))
  ) {
    return ("true");
  }
  else {
    return ("false");
  }
}

console.log(checkNums(listOfNumbers));