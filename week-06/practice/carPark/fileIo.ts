import fs from 'fs';

export function readFromFile(fileName: string) {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

export function writeToFile(fileName: string, content: string) {
  if (fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, content)
  } else {
    console.log('Cannot find file to write in');
  }
}

export function appendToFile(fileName: string, content: string) {
  if (fs.existsSync(fileName)) {
    fs.appendFileSync(fileName, content)
  } else {
    console.log('Cannot find file to write in');
  }
}
