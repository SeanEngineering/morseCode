const morseLibrary = {
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
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-'
  }

const morseCopy = document.getElementById('morseCopy');
morseCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(morseBox.value);
  morseCopy.style.opacity = 0.5;
  setTimeout(()=>{morseCopy.style.opacity = 1;}, 100);
})
const englishCopy = document.getElementById('englishCopy');
englishCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(englishBox.value);
  englishCopy.style.opacity = 0.5;
  setTimeout(()=>{englishCopy.style.opacity = 1;}, 100);
})

const convertToEng = (string) => {
  let morseArray = string.split(' ');
  let englishArray = [];
  
  for (let item of morseArray){
    if (item == '|'){
      englishArray.push(' ')
    } else {
      englishArray.push(Object.keys(morseLibrary).find(key => morseLibrary[key] === item));
    }
  }
  return  englishArray.join('');
  
}

const convertToMorse = (string) =>{
  if (typeof(string) == 'number'){
    string = string.toString();
  }
  let array = string.toLowerCase().split('');
  let morseArray = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] == ' '){
      morseArray.push('| ');
    } else if (array[i] == '\n'){
      morseArray.push('\n');
    } else {
      morseArray.push(`${morseLibrary[array[i]]} `);
    }
  }

  return morseArray.join('').trim();
}

const englishBox = document.getElementById('english');
const morseBox = document.getElementById('morse');

englishBox.addEventListener('keypress', function enterPress(e){
  if (e.which==13){
    morseBox.value = convertToMorse(englishBox.value);
  }
})
morseBox.addEventListener('keypress', function enterPress(e){
  if (e.which==13){
    englishBox.value = convertToEng(morseBox.value);
  }
})


const portfolio = document.getElementById('portfolio');


portfolio.addEventListener('mouseenter', ()=>{
  portfolio.innerText = convertToMorse('Portfolio');
  portfolio.classList.add('main__profile__link--morse')
})
portfolio.addEventListener('mouseleave', ()=>{
  portfolio.innerText = 'Portfolio';
  portfolio.classList.remove('main__profile__link--morse')
})


const mainTitleH2 = document.getElementById('mainTitleH2');