'use strict'
export { }

class Counter {
  integer: number;
  defaultNum: number;
  constructor(value: number = 0) {
    this.defaultNum = value
    this.integer = value;
  }
  add(number: number = 1) {
    this.integer += number;
  }
  get() {
    let integerString: string = this.integer.toString()
    return integerString;
  }
  reset() {
    this.integer = this.defaultNum;
    return this.integer;
  }
}
let number1 = new Counter();

number1.add(5);
console.log(number1);

console.log(number1.get());

console.log(number1.reset());