// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function seperateWithStarts(text: string) {

  if (text.lastIndexOf('*') === text.length - 2) return text;

  else {
    return seperateWithStarts(text.slice(0, text.lastIndexOf('*') + 2) + '*' + text.slice(text.lastIndexOf('*') + 2, text.length));
  }
}

console.log(seperateWithStarts('Finally I added stars everywhere!'));
