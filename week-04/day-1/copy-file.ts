const fs = require('fs');

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function readFromFile(fileName: string) {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(false);
    return null;
  }
}

function copyFile(fileNameFrom: string, fileNameTo: string) {
  const content = readFromFile(fileNameFrom);
  if (content !== null) {
    fs.writeFileSync(fileNameTo, content);
    console.log(true);
  }
}
copyFile('my-file.txt', 'copied-file.txt');