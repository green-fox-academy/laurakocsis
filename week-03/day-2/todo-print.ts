'use strict';
export {};

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

let todoText: string = ' - Buy milk\n';

todoText = "My todo:\n" + todoText + " - Download games\n\t" + "- Diablo\n";

console.log(todoText);