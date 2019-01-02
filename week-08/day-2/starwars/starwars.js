const filmRequest = new XMLHttpRequest();
const searchBtn = document.querySelector('button');
const searchField = document.querySelector('#interactive');
const names = document.querySelector('#characters');
const films = document.querySelector('#films');
let people = [];

const nameListing = (array) => {
  array.forEach(e => {
    people.push([e.name, e.url]);
    if (e.name.toLowerCase().includes(searchField.value.toLowerCase())) {
      const p = document.createElement('p');
      p.textContent = e.name;
      p.setAttribute('class', 'charName');
      names.appendChild(p);
    }
  });
}

const requestResults = (url, pageNumber) => {
  const characterRequest = new XMLHttpRequest();
  characterRequest.onload = () => {
    if (characterRequest.status === 200) {
      const responseChar = JSON.parse(characterRequest.responseText);
      nameListing(responseChar.results);
      requestResults(url, pageNumber + 1);
    } else {
      return;
    }
  }
  characterRequest.open('GET', `${url}${pageNumber}`);
  characterRequest.send();
}

searchBtn.addEventListener('click', () => {
  while (films.lastChild.id !== 'titles') {
    films.removeChild(films.lastChild);
  }
  while (names.lastChild.id !== 'names') {
    names.removeChild(names.lastChild);
  }
  people = [];
  requestResults('https://swapi.co/api/people/?page=', 1);
});

const filmListing = (name) => {
  people.forEach(e => {
    if (e[0] === name) {
      const filmRequest = new XMLHttpRequest();
      filmRequest.onload = () => {
        if (filmRequest.status === 200) {
          const filmResponse = JSON.parse(filmRequest.responseText);
          filmResponse.results.forEach(el => {
            if (el.characters.includes(e[1])) {
              const movie = document.createElement('p');
              movie.textContent = el.title;
              movie.setAttribute('class', 'movie');
              films.appendChild(movie);
            }
          });
        }
      }
      filmRequest.open('GET', 'https://swapi.co/api/films/');
      filmRequest.send();
    }
  });
}

names.addEventListener('click', (e) => {
  while (films.lastChild.id !== 'titles') {
    films.removeChild(films.lastChild);
  }
  filmListing(e.target.innerText);
});