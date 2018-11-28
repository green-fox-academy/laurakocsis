import { Car } from './car';
import { readFromFile, writeToFile, appendToFile } from './fileIo';

class carPark {
  private carCollection: Car[];

  constructor() {
    this.carCollection = [];
  }

  addCar(newCar: Car): void {
    this.carCollection.push(newCar);
  }

  getCarCollection() {
    return this.carCollection;
  }

  addCarToFile(fileName: string, newCar: Car) {
    appendToFile(fileName, `${newCar.getLicensePlate()},${newCar.getManufactureYear()},${newCar.getParkingTicket()}\r\n`);
  }
}
