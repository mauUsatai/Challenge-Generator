const getRandomInt = max => {
  return Math.floor(Math.random() * max); // Generates numbers between 0 and max - 1
};

module.exports.getRandomInt = getRandomInt;