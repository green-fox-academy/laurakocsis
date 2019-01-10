'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'game.html'));
});

app.get('/manage', (req, res) => {
  res.sendFile(path.join(__dirname, 'manage.html'));
});

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'quizapp'
});

app.get('/game', (req, res) => {
  conn.query('SELECT * FROM questions ORDER BY RAND() LIMIT 1;', (err, questions) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    conn.query(`SELECT * FROM answers WHERE question_id=${questions[0].id};`, (e, answers) => {
      if (e) {
        console.log(e.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      res.json({
        id: questions[0].id,
        question: questions[0].question,
        answers: answers
      });
    });
  });
});

app.get('/questions', (req, res) => {
  conn.query('SELECT * FROM questions', (err, data) => {
    if (err) {
      console.log(e.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

app.post('/questions', (req, res) => {
  console.log(req.body);
  const { question, answer1, answer2, answer3, answer4, correct } = req.body;
  conn.query('INSERT INTO questions (question) VALUES (?);', [question], (err, response) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    const newId = response.insertId;
    let insertAnswers;
    if (correct === '1') {
      insertAnswers = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, 1), (?, ?, 0), (?, ?, 0), (?, ?, 0);';
    } else if (correct === '2') {
      insertAnswers = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, 0), (?, ?, 1), (?, ?, 0), (?, ?, 0);';
    } else if (correct === '3') {
      insertAnswers = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, 0), (?, ?, 0), (?, ?, 1), (?, ?, 0);';
    } else if (correct === '4') {
      insertAnswers = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, 0), (?, ?, 0), (?, ?, 0), (?, ?, 1);';
    }
    conn.query(insertAnswers, [newId, answer1, newId, answer2, newId, answer3, newId, answer4], (e, data) => {
      if (e) {
        console.log(e);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      res.status(200).send();
    });
  });
});

app.delete('/questions/:id', (req, res) => {
  const { id } = req.params;
  conn.query(`DELETE a.*, b.* FROM questions a LEFT JOIN answers b ON b.question_id = a.id WHERE a.id = ${id};`, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.status(204).send();
  });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));