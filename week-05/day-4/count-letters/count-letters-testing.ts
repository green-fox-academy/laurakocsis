import { test } from 'tape';
import { countLetters } from './count-letters';

test('coun letters', t => {
  t.deepEqual(countLetters('puppy'), { p: 3, u: 1, y: 1 });
  t.end();
});
