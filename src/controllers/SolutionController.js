const moment = require('moment');
const _ = require('lodash');

const client = require('../database/client');
const {
  red,
  yellow,
  reset,
  pass,
  fail
} = require('../constants/constants')["terminal-formatting"];

const SolutionController = {
  check: async (req, res) => {
    const { id, solutions } = req.body;
    const functions = solutions.map(solution => eval(solution)); // Transforma as strings de solucao em funcoes

    let questions;
    try {
      questions = await client.get(id);
    } catch (err) {
      return res.status(500);
    }

    let data = '';
    // Checa se as solucoes enviadas pelo usuario estao corretas
    for ( let i = 0; i < questions.length; i++ ) {
      const { question, inputs, outputs } = questions[i];
      data += `\n${yellow}${i + 1}. ${question}${reset}\n\n`;
      for ( let j = 0; j < inputs.length; j++ ) {
        try {
          let timer_ini = moment();
          let answer = functions[i](_.clone(inputs[j]));
          let time = (moment() - timer_ini) / (1000 * 60); // Calcula o tempo gasto na solucao

          let passed = _.isEqual(answer, outputs[j]) ? pass : fail;

          data += `${''.padEnd(5)} test case ${j + 1} ${''.padEnd(10, '.')} ${passed} tempo: ${time.toFixed(3)} segundos\n`;
        } catch (err) {
          data += `${red}${err.message}${reset}`;
        }
      }
    }
    return res.json(data);
  }
};

module.exports = SolutionController;