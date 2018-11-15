// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function changeChars(text: string) {
  if (text.indexOf('x') === -1) {
    return text;
  } else {
    return changeChars(text.replace('x', 'y'));
  }
}

console.log(changeChars('Hello bunnx, xou are funnx.'))
