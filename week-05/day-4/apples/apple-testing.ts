import { test } from 'tape';
import { Apple } from './apple';

let redApple = new Apple;

test('string equals', t => {
  t.equal(redApple.getApple(), 'apple');
  t.end();
});
