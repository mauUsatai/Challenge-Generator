const express = require('express');

const htmlGenerator = require('./util/htmlGenerator');
const { pickQuestions } = require('./generators/generator');

const QuestionsController = require('./controllers/QuestionsController');
const SolutionController = require('./controllers/SolutionController');

const { NUMBER_OF_QUESTIONS } = require('./constants/constants');

const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/api/questions', QuestionsController.create);
router.post('/api/solution', SolutionController.check);

module.exports = router;