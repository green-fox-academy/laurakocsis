// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(0);
    return null;
  }
}

function IPaddresses(file) {
  if (readFromFile(file) !== null) {
    let content = readFromFile(file).split('   ');
    let IParray: any[] = [];
    for (let i = 1; i < content.length; i += 2) {
      IParray.push(content[i]);
    }
    let uniqueAddresses = IParray.filter((elem, index, arr) => {
      if (arr.indexOf(elem) === index) {
        return elem;
      }
    })
    console.log(uniqueAddresses);
  }
}

IPaddresses('log.txt');

function getPostRatio(file): void {
  if (readFromFile(file) !== null) {
    let content = readFromFile(file).split('\r\n');
    let GETcount: number = 0;
    let POSTcount: number = 0;
    content.forEach(function (element) {
      if (element.indexOf('GET') !== -1) {
        GETcount += 1;
      }
      if (element.indexOf('POST') !== -1) {
        POSTcount += 1;
      }
    })
    console.log(GETcount / POSTcount);
  }
}

getPostRatio('log.txt');