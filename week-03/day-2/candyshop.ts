'use strict';
export {};

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(arr: any []) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      arr[i] = "Croissant";
    }
    else if (typeof arr[i] === "boolean") {
      arr[i] = "Ice cream";
    }
  }
  return arr;
}
console.log(sweets(shopItems));