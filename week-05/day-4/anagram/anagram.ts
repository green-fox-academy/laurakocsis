export function checkAnagram(text: string, text2: string): boolean {
  return (text.split('').sort().join('') === text2.split('').sort().join(''));
}

console.log(checkAnagram('abcd', 'bcda'));
