'use strict'
export{}

// -  Create a function called `factorio`
//    that returns it's input's factorial

let num: number = 5;

function factorio(counter: number) {
    let multi: number = counter;
    for (let i: number = 0; i < counter - 1; i++) {
        
        multi = multi * (i + 1)
        }
    console.log(multi);
}
factorio(num);
