'use strict';
export {}

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function nameWith4Candies(arr) {
  for (let i = 0; i < arr.length; i++) {
    let nameArr = (Object.values(arr[i]));
    if (nameArr[2] > 4) {
      console.log(nameArr[0]);
    }
  }
}
nameWith4Candies(students);

function averageCandies(arr) {
  let averageArr: any [] = [];
  let sumCandies = 0;
  for (let j = 0; j < arr.length; j++) {
    averageArr = (Object.values(arr[j]));
    sumCandies += averageArr[2];
  }
  console.log(sumCandies/(arr.length + 1) + ' candies the students have on average');
}
averageCandies(students);