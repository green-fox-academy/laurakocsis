'use strict'
import { Animal } from "./animal"

class Farm {
  animalsList: Animal[];
  animalSlots: number;

  constructor(places: number) {
    this.animalSlots = places;
    this.animalsList = [];
  }

  breed(newAnimal: Animal) {
    if (this.animalSlots > 0) {
      this.animalsList.push(newAnimal);
      this.animalSlots--;
    }
    else {
      console.log("The farm is full");
    }
  }

  slaughter() {
    let slaughterIndex: number = 0;
    for (let i = 1; i < this.animalsList.length; i++) {
      if (this.animalsList[slaughterIndex].hunger > this.animalsList[i].hunger) {
        slaughterIndex = i;
      }
    }
    this.animalsList.splice(slaughterIndex, 1);
    return this.animalsList;
  }
}
export { Farm };
