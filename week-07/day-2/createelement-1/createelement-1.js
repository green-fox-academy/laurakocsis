const asteroidList = document.querySelector('ul.asteroids');

const asteoridThree = document.createElement('li');
asteoridThree.textContent = 'The Green Fox';
asteroidList.appendChild(asteoridThree);

const asteroidFour = document.createElement('li');
asteroidFour.textContent = 'The Lamplighter';
asteroidList.appendChild(asteroidFour);

const container = document.querySelector('div.container');
const heading = document.createElement('h1');
heading.textContent = 'I can add elements to the DOM!';

container.appendChild(heading);

const image = document.createElement('img');
image.src = 'https://exlmedia.com/wp-content/uploads/2-cute-puppies.jpg';
container.appendChild(image);
