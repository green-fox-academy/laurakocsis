'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};

export function median(pool: number[]): number {
  if (pool.length % 2 === 1) {
    return pool[(pool.length - 1) / 2];
  } else {
    return (pool[pool.length / 2] + pool[(pool.length / 2) + 1]) / 2;
  }
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character.toLowerCase());
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve.charAt(i);
    if (isVowel(c)) {
      teve = teve.substring(0, i) + `${c}v${c}` + teve.substring(i + 1, length);
      i += 2;
      length += 2;
    }
  }
  return teve;
}
