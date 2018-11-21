import { Instrument } from "./instruments";

export abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor() {
    super();
  }

  sound() {
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }
}
