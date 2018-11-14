'use strict'

const fs = require('fs');

function readFromFile(fileName: string) {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  }
  catch (e) {
    console.log('File cannot be found');
    return null;
  }
}

function reverseOrder(file) {
  let fileContent = readFromFile(file);
  if (fileContent !== null) {
    return fileContent = fileContent.split('\r\n').reverse().join('\r\n');
  }
}

console.log(reverseOrder('reversed-order.txt'));
