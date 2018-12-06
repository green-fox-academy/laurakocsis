const classes = document.querySelectorAll('p');
const content = document.querySelector('.animals');

//Filling everey paragraph with the last one's content
// classes.forEach(e => {
//   e.textContent = content.innerText;
// });

//Keep the word "cat" strong
classes.forEach(e => {
  e.innerHTML = content.innerHTML;
});
