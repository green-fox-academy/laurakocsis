'use strict';
export {}

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival


function checkGuns (arr) {
  let allowedPeople: any [] = [];
  arr.forEach(function(person) {
    if (person.guns > 0) {
      watchlist.push(person.name);
    }
    else {
      allowedPeople.push(person);
    }
  })
  return allowedPeople;
  }

function checkAlcohol (arr) {
  arr.forEach(function(person) {
    if (person.alcohol > 0) {
      securityAlcoholLoot += person.alcohol;
      person.alcohol = 0;
    }
  })
  return arr;
}

function securityCheck(arr) {
  console.log(checkAlcohol(checkGuns(arr)));
}

securityCheck(queue);
