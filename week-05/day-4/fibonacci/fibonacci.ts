export function fibonacci(index: number) {

  if (index === 0) {
    return 0;

  } else if (index === 1) {
    return 1;

  } else {
    return fibonacci(index - 1) + fibonacci(index - 2);
  }
}

console.log(fibonacci(4));
