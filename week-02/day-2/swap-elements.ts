'use strict'
export{}

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"];

function swapElements(cab) {
    let i = cab[0];
   cab[0] = cab[2];
   cab[2] = i;
   console.log(cab);
}
swapElements(abc);
