// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(0);
    return null;
  }
}

function removeDuplicates(file) {
  let content = readFromFile(file);
  if (content !== null) {
    let clearContent: string = ''
    for (let i = 0; i < content.length; i++) {
      let j = i + 1;
      if (content.charAt(i) === content.charAt(j)) {
        clearContent += content.charAt(i);
      }
    }
    console.log(clearContent);
  }
}
removeDuplicates('duplicated-chars.txt');