'use strict'
export{}
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//    
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrixSize: number = 4;

let matrix = [];

for (let i: number = 0; i < matrixSize; i++) {
  let rowMatrix : number [] = [];
  for (let j: number = 0; j <matrixSize; j++) {
    if (i + j === matrixSize - 1) {
      rowMatrix.push(1);     
    }
    else {
      rowMatrix.push(0);
    }
  }
  matrix.push(rowMatrix);
  }

matrix.map(e => console.log(e));