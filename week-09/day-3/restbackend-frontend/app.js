const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));;
});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.json({
      received: req.query.input,
      result: 2 * req.query.input
    });
  } else {
    res.json({
      error: "Please provide an input!"
    });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  } else if (!req.query.name) {
    res.json({
      error: 'Please provide a name!'
    });
  } else if (!req.query.title) {
    res.json({
      error: 'Please provide a title!'
    });
  }
});

app.get('/appenda/:appendable?', (req, res) => {
  if (req.params.appendable) {
    res.json({
      appended: `${req.params.appendable}a`
    });
  } else {
    res.status(404).send();
  }
});

function sum(number) {
  let startNum = 0;
  for (let i = 0; i < number; i++) {
    startNum += i + 1;
  }
  return startNum;
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

app.post('/dountil/:action', (req, res) => {
  const { action } = req.params;
  if (action == 'sum') {
    res.json({
      result: sum(req.body.until)
    });
  } else if (action == 'factor') {
    res.json({
      result: factorial(req.body.until)
    });
  } else if (req.body.until == undefined) {
    res.json({
      error: 'Please provide a number!'
    });
  }
});

app.listen(PORT);