// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');

let fileContent = 'Laura Kocsis';

function writeFile(fileName: string) {
  try {
    fs.writeFileSync(fileName, fileContent);
  } catch (e) {
    console.log('Unable to write file: my-file.txt');
    return null;
  }
}

writeFile('write-file.txt');