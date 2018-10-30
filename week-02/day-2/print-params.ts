'use strict'
export{}
// Task:
//    Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...input: any) {
    console.log(input);
}
printParams("hello",9);