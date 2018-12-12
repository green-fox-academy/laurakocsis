const body = document.querySelector('body');

console.log(window);

for (let i = 0; i < 10; i++) {
  const box = document.createElement('div');
  box.setAttribute('class', 'box');
  body.appendChild(box);
  box.style.backgroundColor = 'RGB(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
}


body.addEventListener('click', () => {
  console.log(window.scrollY);
  console.log(body.offsetHeight - window.innerHeight);
});

window.addEventListener('scroll', () => {
  if ((body.offsetHeight - window.innerHeight) === window.scrollY) {
    console.log("hello");
    for (let j = 0; j < 10; j++) {
      const box = document.createElement('div');
      box.setAttribute('class', 'box');
      body.appendChild(box);
      box.style.backgroundColor = 'RGB(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    }
  }
});