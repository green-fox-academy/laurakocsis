const lollypop = '🍭';
let candyCounter = 0;
let lollypopCounter = 3;
const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const createCandy = document.querySelector('.create-candies');
const buyLollypop = document.querySelector('.buy-lollypops');
const candyRain = document.querySelector('.candy-machine');

createCandy.addEventListener('click', () => {
  candyCounter++;
  candies.textContent = candyCounter;
});

buyLollypop.addEventListener('click', () => {
  if (candyCounter >= 100) {
    lollypopCounter++;
    candyCounter -= 100;
    lollypops.textContent += lollypop;
    candies.textContent = candyCounter;
  }
});