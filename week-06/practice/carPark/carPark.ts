import { Car } from './car';
import { readFromFile, writeToFile, appendToFile } from './fileIo';

export class CarPark {
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

  addCarToFile(fileName: string, newCar: Car): void {
    appendToFile(fileName, `${newCar.getLicensePlate()},${newCar.getManufactureYear()},${newCar.getParkingTicket()}\r\n`);
  }

  removeCar(carId: number): void {
    this.carCollection.forEach((e, i) => {
      if (e.getId() === carId) {
        this.carCollection.splice(i, 1);
      } else if ((this.carCollection.some(e => e.getId() === carId)) === false) {
        console.log('There is no car in my car park with this ID');
      }
    })
  }
}
