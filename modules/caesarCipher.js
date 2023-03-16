function shiftLetter(letter, shiftValue) {
  if(!letter.match('[A-za-z]')) {
    return letter;
  }
  else {
    const alphabetUnicodeOffset = (letter.charCodeAt(0) < 97) ? 65 : 97;
    const letterNumber = letter.charCodeAt(0) - alphabetUnicodeOffset;
    const newLetterNumber = (letterNumber + shiftValue) % 26;
    const newLetterUnicode = newLetterNumber + alphabetUnicodeOffset;
    return String.fromCharCode(newLetterUnicode);
  }
}

function caesarCipher(string, shiftValue) {
  let newString = ''
  for(let i = 0; i < string.length; i++) {
    newString += shiftLetter(string[i], shiftValue);
  }
  return newString;
}
export {caesarCipher}