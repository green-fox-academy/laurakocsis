'use strict';
export {};

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let wordToReplace : string = 'dishwasher';

function replaceString (str: string): string {
  let newExample = example.replace(wordToReplace, "galaxy");
  return newExample;
}
example = replaceString(example)

console.log(example);