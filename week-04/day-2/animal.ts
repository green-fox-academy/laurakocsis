'use strict'
export { }

class Animal {
  hunger: number;
  thirst: number;

  constructor(hungry: number = 50, thirsty: number = 50) {
    this.hunger = hungry;
    this.thirst = thirsty;
  }
  eat() {
    this.hunger -= 1;
  }
  drink() {
    this.thirst -= 1;
  }
  play() {
    this.hunger += 1;
    this.thirst += 1;
  }
}

let tiger = new Animal();
tiger.play();

console.log(tiger.hunger);
console.log(tiger.thirst);
