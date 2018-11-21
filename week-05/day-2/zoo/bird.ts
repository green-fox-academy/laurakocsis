import { Animal } from "./animal"
import { Flyable } from "../flyable/flyable"

export class Bird extends Animal implements Flyable {

  constructor(name: string, age?: number, gender?: string, legNumber?: number) {
    super()
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.legs = legNumber;
  }

  land() {
    console.log(`The ${this.constructor.name} has landed.`);
  }

  fly() {
    console.log(`The ${this.constructor.name} is flying.`);
  }

  takeoff() {
    console.log(`The ${this.constructor.name} took off.`);
  }
}
