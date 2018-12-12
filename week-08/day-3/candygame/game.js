const lollypop = '🍭';
let candyCounter = 0;
let lollypopCounter = 3;
let candiesPerSec = 0;
let candyRainOn = 1;
let rainPressed = 0;
const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const createCandy = document.querySelector('.create-candies');
const buyLollypop = document.querySelector('.buy-lollypops');
const candyRain = document.querySelector('.candy-machine');
const candySpeed = document.querySelector('.speed');

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

setInterval(() => {
  if (lollypopCounter >= 10) {
    candyCounter += Math.floor(lollypopCounter / 10) * candyRainOn;
    candies.textContent = candyCounter;
    candiesPerSec = Math.floor(lollypopCounter / 10) * candyRainOn;
    candySpeed.textContent = candiesPerSec;
  }
}, 1000);

candyRain.addEventListener('click', () => {
  if (rainPressed === 0) {
    rainPressed++;
    candyRainOn = 10;
  } else {
    rainPressed--;
    candyRainOn = 1;
  }
});
