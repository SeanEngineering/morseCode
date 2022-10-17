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
  }

const englishBox = document.getElementById('english');
const morseBox = document.getElementById('morse');
const checkInput = () => {
    let englishInput = englishBox.innerText;
    console.log(englishInput);
}

window.addEventListener('keydown', checkInput);

const portfolio = document.getElementById('portfolio');

portfolio.addEventListener('mouseenter', ()=>{
  portfolio.innerText = '.--. --- .-. - ..-. --- .-.. .. ---';
  portfolio.classList.add('main__profile__link--morse')
})
portfolio.addEventListener('mouseleave', ()=>{
  portfolio.innerText = 'Portfolio';
  portfolio.classList.remove('main__profile__link--morse')
})
