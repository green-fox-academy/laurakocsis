export abstract class Vehicle {

  protected wheels: number;
  protected color: string;
  protected owner: string;

  constructor(wheels: number, color: string, owner: string) {
    this.wheels = wheels;
    this.color = color;
    this.owner = owner;
  }
}
