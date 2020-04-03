const path = require('path');

const express = require('express');
const app = express();

const PORT = 3000;
const NUMBER_OF_QUESTIONS = 3;

const htmlGenerator = require('./util/htmlGenerator');
const { pickQuestions } = require('./generators/generator');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

app.get('/', (req, res) => {
  // Gerar lista de exercicios
  const questions = pickQuestions(NUMBER_OF_QUESTIONS);
  // Calcular output correto
  for ( let question of questions ) {
    question.outputs = [question['output-function'](question.inputs[0])]; // Restart outputs to an empy array
  }
  // Criar html
  const html = htmlGenerator(questions);
  // Enviar resposta
  res.send(html);
});

app.get('/api/questions', (req, res) => {
  // Gerar lista de exercicios
  const questions = pickQuestions(NUMBER_OF_QUESTIONS);
  // Calcular outputs corrretos
  for ( let question of questions ) {
    question.outputs = []; // Restart outputs to an empy array
    for ( let input of question.inputs ) {
      question.outputs.push(question['output-function'](input));
    }
  }
  // Enviar resposta
  res.json(questions);
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});