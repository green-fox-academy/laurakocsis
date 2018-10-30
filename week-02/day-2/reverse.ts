'use strict'
export{}

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

//Solution 1 - reversing with built in method
let numList: number [] = [3, 4, 5, 6, 7];

let reversedList = numList.reverse();

console.log(reversedList);

//Solution 2 - reversing with a loop

let i: number = 0;
let j: number = numList.length;

let reversedList2 = (function reversing(){
    for ((i = 0, j = numList.length); i = j; i++ && j--) {
        let k = reversedList2[i];
        reversedList2[i] = reversedList2[j];
        reversedList2[j] = k;
    }
})
console.log(reversedList);