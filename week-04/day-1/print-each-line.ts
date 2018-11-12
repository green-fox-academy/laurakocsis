
// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require('fs');

function readFile(fileToRead) {
  try {
    return fs.readFileSync(fileToRead, 'utf-8');
  } catch (e) {
    return null;
  }
}

function printFileLines(file) {
  const fileContent = readFile(file);
  if (fileContent === null) {
    console.log('Unable to read file: my-file.txt');
  }
  else {
    fileContent.split('\r\n').forEach(elem => {
      console.log(elem);
    })
  }
}

printFileLines('my-file.txt');