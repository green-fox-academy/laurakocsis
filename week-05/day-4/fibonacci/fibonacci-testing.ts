import { test } from 'tape';
import { fibonacci } from './fibonacci';

test('check the value of fibonacci', t => {
  t.equals(fibonacci(4), 3);
  t.end();
});

test('check if index is minus', t => {
  t.throws(function () {
    fibonacci(-5)
  });
  t.end();
});

test('check if index is a floating number', t => {
  t.throws(function () {
    fibonacci(1.5)
  });
  t.end();
});