'use strict';
export {};

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function bubble(arr: number []) {
  return arr.sort(function compare(a: number, b: number) {
  return a - b;
})
}
console.log(bubble([34, 12, 24, 9, 5]));

function advancedBubble(arr: number [], descending: boolean) {
  if (descending) {
  return arr.sort(function compare(a: number, b: number) {
  return b - a;
})}
  else {
  return arr.sort(function compare(a: number, b: number) {
  return a - b;
  })}}
  console.log(advancedBubble([34, 12, 24, 9, 5], true));