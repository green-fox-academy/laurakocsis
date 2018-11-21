import { Reservationy } from "./reservationy"

export class Reservation implements Reservationy {
  protected code: string;
  protected dow: string;

  constructor() {
    let days: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    this.dow = days[(Math.floor(Math.random() * 7))];

    let possibleChars: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let generatedCode: string = '';
    for (let i = 0; i < 8; i++) {
      generatedCode += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    this.code = generatedCode;
  }

  getDowBooking() {
    return this.dow;
  }

  getCodeBooking() {
    return this.code;
  }

  info() {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }
}
