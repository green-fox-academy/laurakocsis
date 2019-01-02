const filmRequest = new XMLHttpRequest();
const searchBtn = document.querySelector('button');
const searchField = document.querySelector('#interactive');
const names = document.querySelector('#characters');
const characters = document.querySelectorAll('.charName');
const people = [];

filmRequest.onreadystatechange = () => {
  if (filmRequest.readyState === XMLHttpRequest.DONE) {
    if (filmRequest.status === 200) {
      const responseFilms = JSON.parse(filmRequest.responseText);
      console.log(responseFilms);
    }
  }
}

filmRequest.open('GET', 'https://swapi.co/api/films/');
filmRequest.send();

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
  while (names.lastChild.id !== 'names') {
    names.removeChild(names.lastChild);
  }
  requestResults('https://swapi.co/api/people/?page=', 1);
});