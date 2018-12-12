const button = document.querySelector('button');
let counter = 0

button.addEventListener('click', e => {
  if (counter === 0) {
    console.log(e.timeStamp);
    counter++;
  }
});

button.addEventListener('click', e => {
  {
    console.log(e.timeStamp);
    button.setAttribute('disabled', true);
  }
});
