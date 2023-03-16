function analyzeArray(array) {
  if(array.length === 0) {
    throw new Error('Empty Array');
  }
  let sum = 0;
  let min = array.slice(0, 1);
  let max = array.slice(0, 1);
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
    if(array[i] < min) {min = array[i]}
    else if(array[i] > max) {max = array[i]}
  }
  const avg = sum / array.length;
  return {'average': avg,
          'min': min,
          'max' : max,
          'length' : array.length
        };
}

export {analyzeArray}