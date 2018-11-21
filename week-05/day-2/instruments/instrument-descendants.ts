import { StringedInstrument } from "./stringedInstruments";

export class ElectricGuitar extends StringedInstrument {

  constructor(stringNumber: number = 6) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = stringNumber;
  }

  sound(): string {
    return 'Twang';
  }
}

export class BassGuitar extends StringedInstrument {

  constructor(stringNumber: number = 4) {
    super();
    this.name = 'Bass Guitar';
    this.numberOfStrings = stringNumber;
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstrument {

  constructor(stringNumber: number = 4) {
    super();
    this.name = 'Violin';
    this.numberOfStrings = stringNumber;
  }

  sound() {
    return 'Screech'
  }
}
