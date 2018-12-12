const btn = document.querySelector('button');
const text = document.querySelector('#text');


const log = () => {
  setTimeout(() => {
    text.textContent = '2 seconds ellapsed';
  }, 2000);
}

btn.addEventListener('click', log);