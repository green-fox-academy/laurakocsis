'use strict';
export { }

//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list

function subint(numToCheck: number, inArr: number[]): number[] {
  let arrayIndexes: number[] = [];
  for (let i = 0; i < inArr.length; i++) {
    let searchedNum: string = numToCheck.toString();
    let arrElement: string = inArr[i].toString();
    if (arrElement.indexOf(searchedNum) !== -1) {
      arrayIndexes.push(inArr.indexOf(inArr[i]));
    }
  }
  return arrayIndexes;
}

console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'