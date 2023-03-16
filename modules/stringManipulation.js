function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

export {capitalize, reverseString}