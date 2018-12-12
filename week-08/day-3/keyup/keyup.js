const text = document.querySelector('h1');

window.addEventListener('keyup', e => {
  console.log(e);
  text.textContent = `Last pressed key code is: ${e.key}`;
});