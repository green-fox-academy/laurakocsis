'use strict'

class Car {
  
  name: string;
  gasAmount: number = 0;
  capacity: number = 100;

  constructor(carname: string) {
    this.name = carname;
    this.gasAmount;
    this.capacity;
  }
}

class Station {
  gasAmount: number;

  constructor(gas: number = 1000) {
    this.gasAmount = gas;
  }

  refill(car: Car) {
    this.gasAmount = this.gasAmount - car.capacity;
    car.gasAmount = car.capacity;
    car.capacity = 0;
    console.log(this.gasAmount);
    console.log(car);
  }
}

let Trabant = new Car('Trabant');
let Kispolski = new Car('Kispolski');

let OMV = new Station(1500);

console.log(Trabant, Kispolski, OMV);

OMV.refill(Trabant);
OMV.refill(Kispolski);
