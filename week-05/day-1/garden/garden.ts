import { Flower } from "./flower"
import { Tree } from "./tree"

export class Garden {
  name: string;
  plants: Flower[] | Tree[];

  constructor(name: string) {
    this.name = name;
    this.plants = []
  }

  addPlants(plant: Flower | Tree) {
    this.plants.push(plant);
  }

  plantInfo() {
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].needWater()) {
        console.log(`The ${this.plants[i].color} ${this.plants[i].constructor.name} needs water`);
      } else {
        console.log(`The ${this.plants[i].color} ${this.plants[i].constructor.name} doesn't need water`);
      }
    }
  }

  watering(number?: number) {
    console.log(`Watering with ${number}`)
    let plantsNeedWater = 0;
    this.plants.forEach(function (plant) {
      if (plant.needWater) {
        plantsNeedWater++;
      } return plantsNeedWater
    }
    );
    let waterPortion = number / plantsNeedWater;
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].needWater()) {
        this.plants[i].waterAmount += waterPortion * this.plants[i].absorption;
        if (this.plants[i].needWater()) {
          console.log(`The ${this.plants[i].color} ${this.plants[i].constructor.name} needs water`);
        }
        else {
          console.log(`The ${this.plants[i].color} ${this.plants[i].constructor.name} doesn't need water`);
        }
      }
      else {
        console.log(`The ${this.plants[i].color} ${this.plants[i].constructor.name} doesn't need water`);
      }
    }
  }
}
