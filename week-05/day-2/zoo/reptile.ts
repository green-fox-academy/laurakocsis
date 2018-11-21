import { Animal } from "./animal";

export class Reptile extends Animal {

  constructor(name: string, age?: number, gender?: string, legNumber?: number) {
    super()
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.legs = legNumber;
  }
}
