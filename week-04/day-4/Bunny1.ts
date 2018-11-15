// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function countBunnyEars(bunnyNumber: number) {
  if (bunnyNumber === 1) return 2;

  return 2 + countBunnyEars(bunnyNumber - 1);
}

console.log(countBunnyEars(9));
