'use strict';
export {};

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candyCounter (arr) {
  let sumCandies = 0;
  let onesCandies: any [] = [];
  for (let i = 0; i < arr.length; i++) {
    onesCandies = (Object.values(arr[i]));
    sumCandies += onesCandies[2];
  }
  console.log(sumCandies + ' candies are owned by students');
}

candyCounter(students);

function ageCounter (arr) {
  let sumAge = 0;
  let onesAges: any [] = [];
  for (let j = 0; j < arr.length; j++) {
    onesAges = (Object.values(arr[j]));
    if (onesAges[2] < 5) {
      sumAge += onesAges[1]
    }
  }
  console.log(sumAge + ' is the sum of the age of the people who have less than 5 candies');
}

ageCounter(students);