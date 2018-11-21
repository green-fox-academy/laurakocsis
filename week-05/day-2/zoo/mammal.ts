import { Animal } from "./animal";

export class Mammal extends Animal {

  constructor(name: string, age?: number, gender?: string, legNumber?: number) {
    super()
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.legs = legNumber;
  }

  breed(): string {
    return 'pushing miniature versions out'
  }
}
