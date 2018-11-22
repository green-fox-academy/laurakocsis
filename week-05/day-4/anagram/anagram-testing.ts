import { test } from 'tape';
import { checkAnagram } from './anagram';

test('anagram checking', t => {
  t.ok(checkAnagram('abc', 'bca'));
  t.end();
});
