const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

sum = (numArray) => {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}

multiply = (numArray) => {
  let multiplication = 1;
  for (let i = 0; i < numArray.length; i++) {
    multiplication *= numArray[i];
  }
  return multiplication;
}

double = (numArray) => {
  let doubledArray = [];
  for (let i = 0; i < numArray.length; i++) {
    doubledArray.push(numArray[i] * 2);
  }
  return doubledArray;
}


app.post('/arrays', (req, res) => {
  if (req.body.what === 'sum') {
    res.json({
      result: sum(req.body.numbers)
    });
  } else if (req.body.what === 'multiply') {
    res.json({
      result: multiply(req.body.numbers)
    });
  } else if (req.body.what === 'double') {
    res.json({
      result: double(req.body.numbers)
    });
  } else {
    res.json({
      error: 'Please provide what to do with the numbers!'
    });
  }
});

app.listen(PORT);