'use strict';
export {};

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse(stringToReverse: string): string {
  let reversedString = stringToReverse.split("").reverse().join('');
  return reversedString;
}

console.log(reverse(reversed));