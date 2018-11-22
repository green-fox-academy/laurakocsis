export function countLetters(string: string) {
  let objectLetters = {};
  let letterValues = [];
  string.split('').forEach(e => {
    if (letterValues.indexOf(e) === -1) {
      letterValues.push(e);
    }
  })
  for (let i = 0; i < letterValues.length; i++) {
    let letterCounter: number = 0;
    for (let j = 0; j < string.length; j++) {
      if (letterValues[i] === string[j]) {
        letterCounter++;
      }
    }
    objectLetters[letterValues[i]] = letterCounter;
  }
  return objectLetters;
}

console.log(countLetters('puppy'));
