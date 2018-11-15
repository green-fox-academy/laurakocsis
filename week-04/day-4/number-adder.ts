// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function sumNumbers(sumUntil: number): number {
  if (sumUntil === 1) {
    return 1;
  } else {
    return sumUntil + sumNumbers(--sumUntil);
  }
}

console.log(sumNumbers(4));