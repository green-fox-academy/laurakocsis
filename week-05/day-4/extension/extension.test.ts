'use strict';

import { test } from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(3, 2), 5);
  t.end();
});

test('add: 1 and 5 is 6', function (t: any): any {
  t.equal(add(1, 5), 6);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(5, 4, 6), 6);
  t.end();
});

test('max of three: second', function (t: any): any {
  t.equal(maxOfThree(3, 7, 5), 7);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([8, 5, 3, 5]), 4);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 5, 4, 3]), 5);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('A'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('U'));
  t.end();
});

test("is vowel: k", function(t: any): any {
  t.notOk(isVowel("k"));
  t.end();
});

test('translate: anyateve', function (t: any): any {
  t.equal(translate('anyateve'), 'avanyavateveveve');
  t.end();
});

test('translate: rueppellii', function (t: any): any {
  t.equal(translate('rueppellii'), 'ruvueveppevelliviivi');
  t.end();
});
