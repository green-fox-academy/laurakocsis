let selectedMovie = "";

const genre = document.querySelector('.genre');
const movie = document.querySelector('.movie');
const movies = document.querySelectorAll('.movie option');

console.log(movies);

const form = document.querySelector('#mainform');

form.addEventListener('change', (e) => {
  movies.forEach(el => {
    if (el.className !== e.target.value) {
      el.setAttribute('hidden', 'true');
    } else {
      el.removeAttribute('hidden');
    }
  });
});