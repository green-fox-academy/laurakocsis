// Create a method that decrypts encoded-lines.txt

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

function decryptText(textFile) {
  let content: string = readFromFile(textFile);
  let correctedText: string = '';

  if (content !== null) {

    for (let i = 0; i < content.length; i++) {

      if (content.charCodeAt(i) === 10) {
        correctedText += String.fromCharCode(10);

      } else if (content.charCodeAt(i) === 13) {
        correctedText += String.fromCharCode(13);

      } else if (content.charCodeAt(i) === 32) {
        correctedText += String.fromCharCode(32);

      } else {
        correctedText += String.fromCharCode((content.charCodeAt(i)) - 1);
      }
    }
  }
  return correctedText;
}

console.log(decryptText('encoded-lines.txt'));
