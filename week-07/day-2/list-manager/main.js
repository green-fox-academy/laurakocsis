const body = document.querySelector('body');
const script = document.querySelector('script');
const div = document.createElement('div');
const list = ['bread', 'milk', 'orange', 'tomato'];

const createStructure = () => {
  body.insertBefore(div, script);
  const leftTable = document.createElement('ul');
  leftTable.setAttribute('id', 'left');
  div.appendChild(leftTable);
  const buttons = document.createElement('ul');
  buttons.setAttribute('id', 'functions');
  div.appendChild(buttons);
  const rightTable = document.createElement('ul');
  rightTable.setAttribute('id', 'right');
  div.appendChild(rightTable);
  createLeftBox(leftTable);
  createButtons(buttons);
}


createLeftBox = (parentElement) => {
  list.forEach(e => {
    const li = document.createElement('li');
    li.setAttribute('class', 'leftList');
    li.setAttribute('id', e);
    li.innerText = e;
    parentElement.appendChild(li);
  });
}

createButtons = (parentElement) => {
  const buttonList = ['Up', '>', 'X', 'Down'];
  buttonList.forEach(e => {
    const button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.setAttribute('id', e);
    button.innerText = e;
    parentElement.appendChild(button);
  });
}

createStructure();
