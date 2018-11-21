export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected legs: number;

  constructor() {
  }

  getName() {
    return this.name;
  }

  breed(): string {
    return 'laying eggs'
  }

  makesSound() {
  }
}