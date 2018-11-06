'use strict';
export {};

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(arr: number[]) {
  if (arr.some(e => e === 7)) {
    return("Hoorray");
  }
  else {
    return("Noooooo");
  }
}

// Do this again with a different solution using different list functions!

console.log(containsSeven(numbers));

function isThereSeven(arr: number[]) {
  if (arr.indexOf(7) === -1) {
    return("Noooooo");
  }
  else {
    return("Hoorray");
  }
}
console.log(isThereSeven(numbers));