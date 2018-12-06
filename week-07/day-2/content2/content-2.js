const list = document.querySelectorAll('li');
const items = ['apple', 'banana', 'cat', 'dog'];

list.forEach((e, i) => {
  e.textContent = items[i];
  e.setAttribute('class', 'addcolor');
})
