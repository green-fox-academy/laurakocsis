// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function removeChars(text: string) {
  if (text.indexOf('x') === -1) {
    return text;
  } else {
    return removeChars(text.replace('x', ''));
  }
}

console.log(removeChars('Ix remoxve all unnexcessary characterxs.'));
