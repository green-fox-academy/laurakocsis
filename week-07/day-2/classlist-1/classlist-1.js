const paragraphs = document.querySelectorAll('p');

const appleContent = document.querySelector('.apple');
const catContent = document.querySelector('.cat');
const balloonContent = document.querySelector('.balloon');

if (paragraphs[paragraphs.length - 1].classList.contains('dolphin')) {
  appleContent.textContent = 'pear';
}

if (paragraphs[0].classList.contains('apple')) {
  catContent.textContent = 'dog';
}

appleContent.classList.add('red');

balloonContent.style.borderRadius = '0%';