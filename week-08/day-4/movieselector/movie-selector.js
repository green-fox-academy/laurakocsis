let selectedMovie = "";

const genre = document.querySelector('.genre');
const movie = document.querySelector('.movie');
const movies = document.querySelectorAll('.movie option');
const info = document.querySelector('#result');

console.log(info);

const form = document.querySelector('#mainform');

genre.addEventListener('change', (e) => {
  movies.forEach(el => {
    if (el.className !== e.target.value) {
      el.setAttribute('hidden', 'true');
    } else {
      el.removeAttribute('hidden');
    }
  });
});

movie.addEventListener('change', (e) => {
  selectedMovie = e.target.value;
  info.textContent = `The selected movie is: ${selectedMovie}`;
});