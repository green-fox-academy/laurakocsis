const button = document.querySelector('button');
const site = document.querySelector('body div');

button.onclick = () => {
  if (site.className.includes('party')) {
    site.setAttribute('class', '');
  } else {
    site.setAttribute('class', 'party');
  }
}
