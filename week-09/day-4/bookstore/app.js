require('dotenv').config();

const express = require('express');
const path = require('path');
const mysql = require('mysql');

const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

const app = express();

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));;
});

const connquery = (sql, res) => {
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
}

app.get('/books', (req, res) => {
  const sqlAll =
    `SELECT b.book_name, a.aut_name, c.cate_descrip, p.pub_name, b.book_price
  FROM book_mast AS b
  INNER JOIN author AS a on (b.aut_id = a.aut_id)
  INNER JOIN category AS c on (b.cate_id = c.cate_id)
  INNER JOIN publisher AS p on (b.pub_id = p.pub_id);`;

  if (!req.query.category && !req.query.publisher) {
    connquery(sqlAll, res);
  }

  if (req.query.category && !req.query.publisher) {
    const sqlCategory = sqlAll.slice(0, sqlAll.length - 1).concat(`WHERE c.cate_descrip = '${req.query.category}';`);
    connquery(sqlCategory, res);
  }

  if (!req.query.category && req.query.publisher) {
    const sqlPublisher = sqlAll.slice(0, sqlAll.length - 1).concat(`WHERE p.pub_name = '${req.query.publisher}';`);
    connquery(sqlPublisher, res);
  }

  if (req.query.category && req.query.publisher) {
    const sqlPubCat = sqlAll.slice(0, sqlAll.length - 1).concat(`WHERE c.cate_descrip = '${req.query.category}' AND p.pub_name = '${req.query.publisher}';`);
    connquery(sqlPubCat, res);
  }
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));