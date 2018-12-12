const buttons = document.querySelector('nav');
const image = document.querySelector('.img-inspector');
let xPosition = 0;
let yPosition = 0;
let size = 200;

buttons.addEventListener('click', e => {
  if (e.target.dataset.direction === "in") {
    size += 10;
    image.style.backgroundSize = `${size}%`;
  }
  if (e.target.dataset.direction === "out" && size > 100) {
    size -= 10;
    image.style.backgroundSize = `${size}%`;
  }
  if (e.target.dataset.direction === "left" && xPosition > 0) {
    xPosition -= 10;
    image.style.backgroundPosition = `${xPosition}% ${yPosition}%`;
  }
  if (e.target.dataset.direction === "right" && xPosition < 100) {
    xPosition += 10;
    image.style.backgroundPosition = `${xPosition}% ${yPosition}%`;
  }
  if (e.target.dataset.direction === "up" && yPosition > 0) {
    yPosition -= 10;
    image.style.backgroundPosition = `${xPosition}% ${yPosition}%`;
  }
  if (e.target.dataset.direction === "down" && yPosition < 100) {
    yPosition += 10;
    image.style.backgroundPosition = `${xPosition}% ${yPosition}%`;
  }
});