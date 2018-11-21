import { Domino } from "./domino"
import { Fleet } from "./fleet"
import { Thing } from "./thing"


let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

let fleet = new Fleet();

fleet.add(new Thing('Get milk'));
fleet.add(new Thing('Remove the obstacles'));
fleet.add(new Thing('Stand up').complete());
fleet.add(new Thing('Eat lunch').complete());

for (let domino of dominoes) {
  domino.printAllfields();
}

for (let thing of fleet.things) {
  thing.printAllfields();
}
