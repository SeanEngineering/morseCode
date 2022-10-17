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
    r: '._.',
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

const convertToMorse = (string) =>{
  if (typeof(string) == 'number'){
    string = string.toString();
  }
  let array = string.toLowerCase().split('');
  let morseArray = [];
  for (let i = 0; i < array.length; i++){
    if ((array[i] == ' ') || array[i] == '\n'){
      morseArray.push('| ');
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
    morseBox.innerText = convertToMorse(englishBox.value);
  }
})


const portfolio = document.getElementById('portfolio');


portfolio.addEventListener('mouseenter', ()=>{
  portfolio.innerText = '.--. --- .-. - ..-. --- .-.. .. ---';
  portfolio.classList.add('main__profile__link--morse')
})
portfolio.addEventListener('mouseleave', ()=>{
  portfolio.innerText = 'Portfolio';
  portfolio.classList.remove('main__profile__link--morse')
})