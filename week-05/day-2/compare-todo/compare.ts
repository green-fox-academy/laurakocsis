import { Fleet } from "./fleet";
import { Thing } from "./thing";

export interface Comparable {
  compareTo(other: Comparable): number;
}

let fleet = new Fleet();

fleet.add(new Thing('Get milk'));
fleet.add(new Thing('Remove the obstacles'));
fleet.add(new Thing('Stand up').complete());
fleet.add(new Thing('Eat lunch').complete());

fleet.things.sort(function (a: Thing , b: Thing) {
  return a.compareTo(b);
});

fleet.print();
