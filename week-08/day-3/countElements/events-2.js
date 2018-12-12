const button = document.querySelector('button');
const list = document.querySelectorAll('li');
const result = document.querySelector('.result');

button.addEventListener('click', () => {
  result.textContent = list.length;
});