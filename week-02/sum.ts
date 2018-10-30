'use strict'
export{}
let nums: number = 5;

function sum(input: number) {
    
    for (let i: number = 0; i < input; i++) {
        nums = (nums + i);
    }
    console.log(nums);
}

sum(nums);