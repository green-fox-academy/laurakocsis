const button = document.querySelector('button');
const text = document.querySelector('#text');
let clickCounter = 0;
let fiveSeconds = false;

button.addEventListener('click', e => {
  clickCounter++;
  if (fiveSeconds === true && clickCounter >= 3) {
    text.textContent = '5 seconds elapsed and clicked 3 times';
  }
});

setTimeout(() => {
  fiveSeconds = true;
  if (clickCounter >= 3) {
    text.textContent = '5 seconds elapsed and clicked 3 times';
  }
}, 5000);