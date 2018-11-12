// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByZero (a: number) {
  if (a === 0) {
    throw Error("fail");
  }
  return 10/a;
}

try {
  console.log(divideByZero(0));
} catch (e) {
  console.log(e.message);
}