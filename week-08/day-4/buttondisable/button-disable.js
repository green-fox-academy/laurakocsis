const catButton = document.querySelector('#loveCatbtn');
const signUpButton = document.querySelector('#signUpbtn');

let viktorChecked = false;
let signUp = true;

const form = document.querySelector('.loveanimals');

form.addEventListener('change', (e) => {
  if (e.target.value === "cat" || e.target.value === "dog") {
    viktorChecked = false;
    signUpButton.removeAttribute('disabled');
  } else if (e.target.value === "goldfish" && signUp) {
    viktorChecked = true;
    signUpButton.setAttribute('disabled', 'true');
  } else if (e.target.value === "goldfish" && !signUp) {
    viktorChecked = true;
    signUp = true;
    signUpButton.removeAttribute('disabled');
  } else if (e.target.value === "yes") {
    signUp = true;
    catButton.removeAttribute('disabled');
    if (viktorChecked) {
      signUpButton.setAttribute('disabled', 'true');
    }
  } else if (e.target.value === "no" && !viktorChecked) {
    signUp = false;
    catButton.setAttribute('disabled', 'true');
  } else if (e.target.value === "no" && viktorChecked) {
    signUp = false;
    catButton.setAttribute('disabled', 'true');
    signUpButton.removeAttribute('disabled');
  }
});

catButton.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Thank you, you\'ve successfully signed up for cat facts');
});

signUpButton.addEventListener('click', (e) => {
  if (viktorChecked && !signUp) {
    e.preventDefault();
    alert('Sigh, we still added you to the cat facts list');
  } else {
    e.preventDefault();
    alert('Thank you, you\'ve successfully signed up for cat facts');
  }
});