'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

console.log((60 - currentSeconds) + ((59 - currentMinutes) * 60) + ((23 - currentHours) * 60 * 60));