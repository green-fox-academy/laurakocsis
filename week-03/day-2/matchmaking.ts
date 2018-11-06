'use strict';
export {};

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];


function makingMatches(names1: string [], names2: string []) {
  let girlsBoys: string [] = [];
  if (names1.length < names2.length) {
    for (let i = 0; i < names2.length; i++) {
      girlsBoys.push(names1[i]);
      girlsBoys.push(names2[i]);
    }
  }
  if (names1.length > names2.length) {
    for (let i = 0; i < names1.length; i++) {
      girlsBoys.push(names1[i]);
      girlsBoys.push(names2[i]);
    }
  }
  return girlsBoys;
}

console.log(makingMatches(girls, boys));