export class Sum {
  integers: number[] = [];

  constructor(numbers: number[]) {
    this.integers = numbers;
  }

  sum() {
    let sum: number = 0;
    this.integers.forEach(e => {
      sum += e
    });
    return sum;
  }
}
