'use strict';
export {};

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(list: string []) {
  for (let i = 0; i < list.length; i++) {
    let ending: string = "a";
    list[i] = list[i] + ending;
  }
    return list;
}

console.log(appendA(far));