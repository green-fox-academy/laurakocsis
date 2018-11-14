'use strict'
import { Sharpie } from "./sharpie";

class SharpieSet {
  listOfSharpies: Sharpie[];

  constructor() {
    this.listOfSharpies = [];
  }

  add(sharpie: Sharpie) {
    this.listOfSharpies.push(sharpie);
  }

  countUsable(): number {
    let counter: number = 0;
    for (let i = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].inkAmount > 0) {
        counter++;
      }
    }
    return counter;
  }

  removeTrash(): any [] {
    for (let j = 0; j < this.listOfSharpies.length; j++) {
      if (this.listOfSharpies[j].inkAmount === 0) {
        this.listOfSharpies.splice(j, 1);
      }
    }
    return this.listOfSharpies;
  }
}

import { sharpie1 } from "./sharpie";
let sharpie2 = new Sharpie('red', 10, 25);
let sharpie3 = new Sharpie('blue', 25, 0);

let sharpieSet = new SharpieSet;

sharpieSet.add(sharpie1);
sharpieSet.add(sharpie2);
sharpieSet.add(sharpie3);

console.log(sharpieSet);

console.log(sharpieSet.countUsable());

console.log(sharpieSet.removeTrash());
