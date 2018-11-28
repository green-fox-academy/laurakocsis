import { Car } from './car';
import { CarPark } from './carPark';

let myCarPark = new CarPark;

let car1 = new Car(1, 'ASD-123', 1997, 0);
let car2 = new Car(2, 'FGH-456', 2005, 1);
let car3 = new Car(3, 'QWE-789', 1980, 0);
let car4 = new Car(4, 'RTZ-321', 1999, 1);
let car5 = new Car(5, 'POI-963', 1010, 1);

myCarPark.addCarToFile('cars.csv', car1);
myCarPark.addCarToFile('cars.csv', car2);
myCarPark.addCarToFile('cars.csv', car3);
myCarPark.addCarToFile('cars.csv', car4);
myCarPark.addCarToFile('cars.csv', car5);

myCarPark.addCar(car1);
myCarPark.addCar(car2);
myCarPark.addCar(car3);
myCarPark.addCar(car4);
myCarPark.addCar(car5);

myCarPark.removeCar(8);

console.log(myCarPark.getOldest());