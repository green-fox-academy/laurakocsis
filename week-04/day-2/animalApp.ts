'use strict'
import { Animal } from "./animal"
import { Farm } from "./animalFarm"

let CuteAnimalFarm = new Farm(10);

CuteAnimalFarm.breed(new Animal(20, 10));
CuteAnimalFarm.breed(new Animal(5, 10));
CuteAnimalFarm.breed(new Animal(30, 12));
CuteAnimalFarm.breed(new Animal(41, 21));
CuteAnimalFarm.breed(new Animal(10, 22));
CuteAnimalFarm.breed(new Animal(16, 17));
CuteAnimalFarm.breed(new Animal(29, 14));
CuteAnimalFarm.breed(new Animal(9, 15));
CuteAnimalFarm.breed(new Animal(19, 32));
CuteAnimalFarm.breed(new Animal(2, 19));
CuteAnimalFarm.breed(new Animal(23, 13));
CuteAnimalFarm.breed(new Animal(8, 5));

console.log(CuteAnimalFarm);

console.log(CuteAnimalFarm.slaughter());
console.log(CuteAnimalFarm.slaughter());
