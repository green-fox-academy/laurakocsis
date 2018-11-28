export class Car {
  private id: number;
  private licensePlate: string;
  private manufactureYear: number;
  private prakingTicket: number;

  constructor(id: number, licensePlate: string, manufactureYear: number, prakingTicket: number) {
    this.id = id;
    this.licensePlate = licensePlate;
    this.manufactureYear = manufactureYear;
    this.prakingTicket = prakingTicket;
  }

  getId() {
    return this.id;
  }

  getLicensePlate() {
    return this.licensePlate;
  }

  getManufactureYear() {
    return this.manufactureYear;
  }

  getParkingTicket() {
    return this.prakingTicket;
  }
}
