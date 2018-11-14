import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

//Print function is not used
function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

let firstDomino = dominoes[Math.floor(Math.random() * 6)].values;

function putInOrder() {
    let dominoesInOrder: any[] = [];
    dominoesInOrder.push(firstDomino);
    for (let i = 0; i < dominoes.length - 1; i++) {
        for (let j = 0; j < dominoes.length; j++) {
            if (dominoesInOrder[i][1] === dominoes[j].values[0]) {
                dominoesInOrder.push(dominoes[j].values);
            }
        }
    }
    return dominoesInOrder;
}

console.log(putInOrder());
