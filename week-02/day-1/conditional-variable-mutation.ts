'use strict';

let a: number = 24;
let out: number = 0;

if (a % 2 == 0) {
    out = out + 1;
}
console.log(out);

let b: number = 13;
let out2: string = '';

if ((b > 10) && (b < 20)) {
    out2 = "Sweet!";
}
else if (b < 10) {
    out2 = "Less!";
}
else {out2 = "More!" 
}
console.log(out2);

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (isBonus) {
    c = c;
}
else if (credits < 50) {
    c = c - 1;
}
else {
    c = c - 2;
}
console.log(c);

let d: number =  8;
let time: number = 120;
let out3: string = '';

if (((d % 4) == 0) && (time <= 200)) {
    out3 = "check";
}
else if (time > 200) {
    out3 = "Time out";
}
else {out3 = "Run Forest Run!"};

console.log(out3);