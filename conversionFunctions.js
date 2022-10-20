export const morseLibrary = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  0: '-----',
  ',': '--..--',
  '.': '.-.-.-',
  '?': '..--..',
  '!': '-.-.--',
  '"': '.-..-.',
  ':': '---...',
  "'": '.----.',
  '-': '-...-',
  '(': '-.--.',
  ')': '-.--.-',
};

export const convertToEng = (string) => {
  let morseArray = string.split(' ');
  let englishArray = [];

  for (let item of morseArray) {
    //Handling new lines
    if (item.includes('\n')) {
      let temp = item.split('\n');
      console.log(temp);
      englishArray.push(' ');
      for (let properties of temp) {
        console.log(properties);
        if (properties == '|' || properties == '/') {
          englishArray.push(' ');
        } else if (properties == '') {
          continue;
        } else if (
          Object.keys(morseLibrary).find(
            (key) => morseLibrary[key] === properties
          ) == undefined
        ) {
          return `(${properties} is not in defined in this library)`;
        } else {
          englishArray.push(
            Object.keys(morseLibrary).find(
              (key) => morseLibrary[key] === properties
            )
          );
        }
      }
      //Standard behaviour
    } else {
      if (item == '|' || item == '/') {
        englishArray.push(' ');
      } else if (
        Object.keys(morseLibrary).find((key) => morseLibrary[key] === item) ==
        undefined
      ) {
        return `(${item} is not in morse library)`;
      } else {
        englishArray.push(
          Object.keys(morseLibrary).find((key) => morseLibrary[key] === item)
        );
      }
    }
  }

  return englishArray.join('');
};

export const convertToMorse = (string) => {
  if (typeof string == 'number') {
    string = string.toString();
  }
  let array = string.toLowerCase().split('');
  let morseArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == ' ') {
      morseArray.push('| ');
    } else if (array[i] == '\n') {
      morseArray.push('\n');
    } else if (morseLibrary[array[i]] == null) {
      return `(${array[i]} is not defined in this library)`;
    } else {
      morseArray.push(`${morseLibrary[array[i]]} `);
    }
  }

  return morseArray.join('').trim();
};
