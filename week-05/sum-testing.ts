import { test } from 'tape';
import { Sum } from './sumclass';

let numbers1 = new Sum([1, 2, 3, 4]);

test('sum of numbers', t => {
  t.equal(numbers1.sum(), 10);
  t.end();
});
