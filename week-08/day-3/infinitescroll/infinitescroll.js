const body = document.querySelector('body');

console.log(window);

function createBoxes() {
  for (let i = 0; i < 10; i++) {
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    body.appendChild(box);
    box.style.backgroundColor = 'RGB(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    const img = document.createElement('img');
    if (i % 2 === 0) {
      img.setAttribute('src', 'http://icons.iconarchive.com/icons/lovuhemant/merry-christmas/256/Santa-icon.png');
    } else {
      img.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/30/22/10/deer-1874005_960_720.png');
    }
    box.appendChild(img);
  }
}

createBoxes();

window.addEventListener('scroll', () => {
  if ((body.offsetHeight - window.innerHeight) === window.scrollY) {
    createBoxes();
  }
});