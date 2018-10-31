'use strict';
export {}

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

let expression : string = "What a day!";
let searched : string = "day";

console.log(expression.search(searched));