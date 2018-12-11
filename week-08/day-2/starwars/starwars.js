const characterRequest = new XMLHttpRequest();
const filmRequest = new XMLHttpRequest();

characterRequest.onreadystatechange = () => {
  if (characterRequest.readyState === XMLHttpRequest.DONE) {
    if (characterRequest.status === 200) {
      const responseChar = JSON.parse(characterRequest.responseText);
      console.log(responseChar);
    }
  }
}

characterRequest.open('GET', 'https://swapi.co/api/people/');
characterRequest.send();

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