'use strict'
export{}

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string [] = ["koal", "pand", "zebr"];

let wholeAnimals = animals.map(function (value, index, array) {
    return (array [index] + "a");
})
console.log(wholeAnimals);