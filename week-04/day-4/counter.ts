// Write a recursive function that takes one parameter: n and counts down from n.


function countDown(number: number): number {
  if (number === 0) {
    return 0;
  } else {
    console.log(number)
    countDown(number - 1);
  }
}

countDown(9);