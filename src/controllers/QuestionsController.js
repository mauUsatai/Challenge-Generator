const uuid = require('uuid').v4;
const client = require('../database/client');
const { pickQuestions } = require('../generators/generator');

const { NUMBER_OF_QUESTIONS } = require('../constants/constants');

const QuestionsController = {
  create: (req, res) => {
    // Gerar lista de exercicios
    const questions = pickQuestions(NUMBER_OF_QUESTIONS);
    // Calcular outputs corrretos
    for ( let question of questions ) {
      question.outputs = []; // Restart outputs to an empy array
      for ( let input of question.inputs ) {
        question.outputs.push(question['output-function'](input));
      }
    }
    // Guarda no banco
    const id = uuid();
    client.set(id, questions);
    // Enviar resposta
    const data = {
      questions: questions.map(question => question.question),
      id : id
    };
    res.json(data);
  }
}

module.exports = QuestionsController;