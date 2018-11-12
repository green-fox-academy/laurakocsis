// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    console.log(0);
    return null;
  }
}

function countLines(fileName: string) {
  const fileContent = readFromFile(fileName)
  if (fileContent !== null) {
    console.log(fileContent.split('\r\n').length);
    }
  }

countLines('my-file.txt');