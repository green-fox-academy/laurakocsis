'use strict';

let side1: number = 10.5;
let side2: number = 29.3;
let side3: number = 35.8;

console.log("Surface Area: " + (((side1 * side2) + (side2 * side3) + (side1 * side3)) * 2).toFixed(2));
console.log("Volume: " + (side1 * side2 * side3).toFixed(2));