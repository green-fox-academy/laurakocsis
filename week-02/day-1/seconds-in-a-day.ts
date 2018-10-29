'use strict';

let currentHours: number = 23;
let currentMinutes: number = 58;
let currentSeconds: number = 30;

console.log((60 - currentSeconds) + ((59 - currentMinutes) * 60) + ((23 - currentHours) * 60 * 60));