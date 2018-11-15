// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(integer: number) {
  if (integer < 10) {
    return integer;
  } else {
    return ((integer % 10) + sumDigits((integer - (integer % 10)) / 10));
  }
}

console.log(sumDigits(126));
