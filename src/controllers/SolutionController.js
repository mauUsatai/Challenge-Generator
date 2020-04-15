const { Worker } = require('worker_threads');
const path = require('path'); 
const client = require('../database/client');

const SolutionController = {
  check: async (req, res) => {
    const { id, solutions } = req.body;
    const payload = {
      solutions: solutions,
      questions: await client.get(id)
    };

    const worker = new Worker(path.join(__dirname, '../', 'workers', 'SolutionWorker.js'));
    worker.once('message', message => {
      return res.json(message);
    });
    worker.on('error', console.error);
    worker.postMessage(payload);
  }
};

module.exports = SolutionController;