const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

const asteroidList = document.querySelector('ul.asteroids');
const king = document.querySelector('ul.asteroids li');
asteroidList.removeChild(king);

planetData.forEach(e => {
  if (e.asteroid) {
    newAsteroid = document.createElement('li');
    newAsteroid.setAttribute('class', e.category);
    newAsteroid.textContent = e.content;
    asteroidList.appendChild(newAsteroid);
  }
});

console.log(asteroidList);
