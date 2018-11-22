import { test } from 'tape';
import { Sum } from './sumclass';

//Testing with multiply elements
let numbers1 = new Sum([1, 2, 3, 4]);

test('sum of numbers', t => {
  t.equal(numbers1.sum(), 10);
  t.end();
});


//Testing with empty array
let numbers2 = new Sum([]);

test('sum of numbers', t => {
  t.equal(numbers2.sum(), 10);
  t.end();
});

//Testing with a list with 1 element
let numbers3 = new Sum([9]);

test('sum of numbers', t => {
  t.equal(numbers3.sum(), 10);
  t.end();
