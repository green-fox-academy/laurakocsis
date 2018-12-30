const filmRequest = new XMLHttpRequest();
const searchBtn = document.querySelector('button');
const searchField = document.querySelector('#interactive');
const names = document.querySelector('#characters');

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
    if (e.name.toLowerCase().includes(searchField.value.toLowerCase())) {
      const a = document.createElement('a');
      a.textContent = e.name;
      a.setAttribute('class', 'charName');
      names.appendChild(a);
    }
  });
}

searchBtn.addEventListener('click', () => {
  let morePagesAvailable = true;
  let pageNumber = 9;
  const characterRequest = new XMLHttpRequest();
  characterRequest.onload = () => {
    if (characterRequest.status === 200) {
      const responseChar = JSON.parse(characterRequest.responseText);
      nameListing(responseChar.results);
      pageNumber++;
      if (responseChar.next === null) {
        morePagesAvailable = false;
      }
    }
  }
  characterRequest.open('GET', `https://swapi.co/api/people/?page=${pageNumber}`);
  characterRequest.send();
});