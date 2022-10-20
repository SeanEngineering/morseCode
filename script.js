import {morseLibrary, convertToEng, convertToMorse} from "./conversionFunctions.js"

const englishBox = document.getElementById('english');
const morseBox = document.getElementById('morse');
const morseCopy = document.getElementById('morseCopy');
const englishCopy = document.getElementById('englishCopy');

morseCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(morseBox.value);
  morseCopy.style.opacity = 0.5;
  setTimeout(()=>{morseCopy.style.opacity = 1;}, 100);
})

englishCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(englishBox.value);
  englishCopy.style.opacity = 0.5;
  setTimeout(()=>{englishCopy.style.opacity = 1;}, 100);
})
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