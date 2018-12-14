const body = document.querySelector('body');

console.log(window);

function createBoxes() {
  for (let i = 0; i < 10; i++) {
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    body.appendChild(box);
    box.style.backgroundColor = 'RGB(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
  }
}

createBoxes();

body.addEventListener('click', () => {
  console.log(window.scrollY);
  console.log(body.offsetHeight - window.innerHeight);
});

window.addEventListener('scroll', () => {
  if ((body.offsetHeight - window.innerHeight) === window.scrollY) {
    createBoxes();
  }
});