import { Flyable } from "./flyable"
import { Vehicle } from "./vehicle"

export class Helicopter extends Vehicle implements Flyable {

  constructor(wheels: number, color: string, owner: string) {
    super(wheels, color, owner);
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
