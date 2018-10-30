'use strict'
export{}

let name: string = "Greenfox";

function greet(input: string = "Bözsi") {
    let greeting = "Greetings, dear " + input
    console.log(greeting)
}
greet(name);