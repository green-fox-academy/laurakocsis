const questions = document.querySelector('#questions');

const appendQuestions = (dataArray) => {
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