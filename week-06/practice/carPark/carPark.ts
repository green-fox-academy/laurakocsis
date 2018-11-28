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
    if (this.carCollection.some(e => e.getId() === carId)) {
      this.carCollection.forEach((e, i) => {
        if (e.getId() === carId) {
          this.carCollection.splice(i, 1);
        }
      })
    } else {
      console.log(`There is no car in my car park with the ID: ${carId}`);
    }
  }

  getOldest() {
    if (readFromFile('cars.csv') !== null) {
      let fileContent: string[] = readFromFile('cars.csv').split('\r\n');
      let carData = fileContent.join(',').split(',');
      let oldestYear: string = carData[1];
      for (let i = 4; i < carData.length; i += 3) {
        if ((parseInt(carData[i])) < parseInt(oldestYear)) {
          oldestYear = carData[i];
        }
      }
      return carData[carData.indexOf(oldestYear) - 1];
    }
  }
}
