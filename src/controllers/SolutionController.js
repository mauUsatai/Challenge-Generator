const { Worker } = require('worker_threads');
const path = require('path'); 
const client = require('../database/client');

const SolutionController = {
  check: async (req, res) => {
    const { id, solutions } = req.body;
    const questions = await client.get(id);
    if (questions) {
      const payload = {
        solutions: solutions,
        questions: questions
      };

      const worker = new Worker(path.join(__dirname, '../', 'workers', 'SolutionWorker.js'));
      worker.once('message', message => {
        return res.json(message);
      });
      worker.on('error', console.error);
      worker.postMessage(payload);
    } else {
      return res.json({ message: 'Invalid id.' });
    }
  } 
};

module.exports = SolutionController;