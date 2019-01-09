const question = document.querySelector('h2');
const score = document.querySelector('span');
let points = 0;
const options = document.querySelectorAll('button');
const answer = document.querySelector('#questions');

const createQuestion = (data) => {
  question.innerText = data.question;
  options.forEach((e, i) => {
    e.innerText = data.answers[i].answer;
    e.disabled = false;
    e.setAttribute('value', data.answers[i].is_correct);
    e.style.background = '#3498db';
  });
}

const questionRequest = (callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.open('GET', '/game');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
} 

questionRequest(createQuestion);

answer.addEventListener('click', (event) => {
  const { name, value, id } = event.target;
  const chosenAnswer = document.querySelector(`#${id}`);
  if (name === 'answer') {
    if (value === '1') {
      chosenAnswer.style.background = '#4ac100';
      points++;
      score.innerText = points;
    } else {
      chosenAnswer.style.background = '#ff5454';
    }
    options.forEach(e => {
      e.disabled = true;
    });
    setTimeout(() => {
      questionRequest(createQuestion);
    }, 2000);
  }
}); 