'use strict'
export{}

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr) {
  let uniquearr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniquearr.indexOf(arr[i]) === -1) {
      uniquearr.push(arr[i]);
    }
  }
  return uniquearr;
}
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));

