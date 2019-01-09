const questions = document.querySelector('#questions');
const form = document.querySelector('form');
const radiobuttons = document.querySelectorAll('input[type=radio]');

const appendQuestions = (dataArray) => {
  while (questions.firstChild) {
    questions.removeChild(questions.firstChild);
  }
  dataArray.forEach(e => {
    const div = document.createElement('div');
    div.setAttribute('class', 'question');
    const pQuestion = document.createElement('p');
    pQuestion.innerText = e.question;
    const pDelete = document.createElement('p');
    pDelete.setAttribute('class', 'deletebutton');
    pDelete.innerText = 'delete';
    questions.appendChild(div);
    div.appendChild(pQuestion);
    div.appendChild(pDelete);
  });
}

const questionsRequest = (callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.open('GET', '/questions');
  xhr.send();
}

questionsRequest(appendQuestions);

const sendNewQuestion = () => {
  const { newQuestion, answerone, answertwo, answerthree, answerfour, correctanswer } = form.elements;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/questions');
  xhr.onload = () => {
    if (xhr.status === 200) {
      questionsRequest(appendQuestions);
      newQuestion.value = '';
      answerone.value = '';
      answertwo.value = '';
      answerthree.value = '';
      answerfour.value = '';
      radiobuttons.forEach(e => {
        e.checked = false;
      });
    }
  }
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    question: newQuestion.value,
    answer1: answerone.value,
    answer2: answertwo.value,
    answer3: answerthree.value,
    answer4: answerfour.value,
    correct: correctanswer.value
  }));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendNewQuestion();
});