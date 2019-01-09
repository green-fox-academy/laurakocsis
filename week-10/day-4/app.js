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
  conn.query('SELECT * FROM questions;', (err, questions) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    const questionNumber = Math.max.apply(Math, questions.map(function (ids) { return ids.id; }));
    const randomId = Math.floor(Math.random() * questionNumber) + 1;
    conn.query(`SELECT * FROM answers WHERE question_id=${randomId};`, (e, answers) => {
      if (err) {
        console.log(e.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      res.json({
        id: questions[randomId - 1].id,
        question: questions[randomId - 1].question,
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
    let insertAnswers = '';
    if (correct === 1) {
      insertAnswers = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, 1), (?, ?, 0), (?, ?, 0), (?, ?, 0);';
    } else if (correct === 2) {
      insertAnswers = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, 0), (?, ?, 1), (?, ?, 0), (?, ?, 0);';
    } else if (correct === 3) {
      insertAnswers = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, 0), (?, ?, 0), (?, ?, 1), (?, ?, 0);';
    } else if (correct === 4) {
      insertAnswers = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, 0), (?, ?, 0), (?, ?, 0), (?, ?, 1);';
    }
    conn.query(insertAnswers, [newId, answer1, newId, answer2, newId, answer3, newId, answer4], (e, data) => {
      if (e) {
        console.log(e.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      res.sendStatus(200);
    });
  });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));