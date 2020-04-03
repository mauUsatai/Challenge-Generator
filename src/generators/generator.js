const { getRandomInt } = require('../util/math');
const { getRandomChar } = require('../util/str');

const INT_ARRAY_MAX_VALUE = 20;

const inputGenerator = {
  getRandomNumsArrayNoRepeat: size => {
    const arr = [];
    const alreadyChosen = [];
    while( arr.length < size ) {
      const number = getRandomInt(INT_ARRAY_MAX_VALUE);
      if ( !alreadyChosen.includes(number) ) {
        arr.push(number);
      }
      alreadyChosen.push(number);
    }
    return arr;
  },
  getRandomNumsArray: size => {
    const arr = [];
    while ( arr.length < size ) {
      arr.push(getRandomInt(INT_ARRAY_MAX_VALUE));
    }
    return arr;
  },
  getPalindrome: size => {
    let str = '';
    for ( let i = 0; i < Math.floor(size / 2); i++ ) { 
      str += getRandomChar(); 
    }
    // Reverse string to be added at the end for symmetry
    const reversedString = str.split("").reverse().join("");
    // There is a 50% chance of this string being a palindrome 
    const secondHalf = Math.random() >= 0.5 ? reversedString : str;
    // Add a copy of the string to itself or the reversed copy in case of a palindrome
    str += ( size % 2 !== 0 ) ? getRandomChar() + secondHalf : secondHalf;
    return str;
  }
};

const pickQuestions = numberOfQuestions => {
  const challenges = require('../generators/questions');
  const chosenChallenges = [];
  const copy = challenges.slice(0);
  while ( chosenChallenges.length < numberOfQuestions ) {
    let index = getRandomInt(copy.length);
    chosenChallenges.push(copy[index]);
    copy.splice(index, 1);
  }
  return chosenChallenges;
}

module.exports.inputGenerator = inputGenerator;
module.exports.pickQuestions = pickQuestions;
