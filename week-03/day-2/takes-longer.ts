'use strict';
export {};
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

function correctingQuote (wrongQuote: string): string {
  let quoteArray: string [] = quote.split("");
  let splicedArray: string [] = quoteArray.splice((quote.indexOf(" you")), 0, " always takes longer than");
  return quoteArray.join("");
}

quote = correctingQuote(quote);

console.log(quote);