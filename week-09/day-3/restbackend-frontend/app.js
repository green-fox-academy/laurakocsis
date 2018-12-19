const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));;
});

app.get('/:doubling', (req, res) => {
  if (req.params = 'doubling' && req.query.input) {
    res.json({
      "received": req.query.input,
      "result": 2 * req.query.input
    });
  } else {
    res.json({
      "error": "Please provide an input!"
    })
  }
})

app.listen(PORT);