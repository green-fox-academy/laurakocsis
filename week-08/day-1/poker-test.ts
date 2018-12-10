import { test } from 'tape';
import { Cards } from './poker';

test ('check card duplicates', t => {
  const cards = new Cards();
  cards.giveCards();
  for (let i = 0; i < 5; i++) {
    let counter = 0;
    for (let j = 0; j < 5; j++) {
      if (cards.getWhite()[i] === cards.getWhite()[j]) {
        counter++;
      }
      if (cards.getWhite()[i] === cards.getBlack()[j]) {
        counter++;
      }
      if (cards.getBlack()[i] === cards.getBlack()[j]) {
        counter++;
      }
    }
    t.equal(counter, 2);
  }
  t.end();
});