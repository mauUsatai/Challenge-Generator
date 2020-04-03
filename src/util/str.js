const { getRandomInt } = require('./math');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const getRandomChar = () => {
  return alphabet[getRandomInt(alphabet.length)];
};

module.exports.getRandomChar = getRandomChar;