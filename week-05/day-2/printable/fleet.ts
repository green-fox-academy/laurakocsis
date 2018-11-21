import { Thing } from "./thing";

class Fleet {
  things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing) {
    this.things.push(thing);

  }
  getThings() {
    return this.things;
  }
  print() {
    for (let i = 0; i < this.things.length; i++) {
      if (this.things[i].isCompleted()) {
        console.log(`[x] ${this.things[i].name()}`);
      } else {
        console.log(`[ ] ${this.things[i].name()}`);
      }
    }
  }
}

export { Fleet };