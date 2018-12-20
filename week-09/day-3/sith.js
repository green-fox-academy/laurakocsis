const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/sith', (req, res) => {
  if (req.body.text && req.body.text !== "") {
    const array = req.body.text.split('.')
      .map(e => {
        let secondWord = "";
        return e.split(' ').map((e, i, a) => {
          if (i % 2 === 0 && a[i + 1]) {
            secondWord = e;
            return a[i] = a[i + 1];
          } else if (i % 2 === 1){
            return a[i] = secondWord;
          } else {
            return e;
          }
        });
      });
    res.json({
      result: array
    })
  }
});

app.listen(PORT);