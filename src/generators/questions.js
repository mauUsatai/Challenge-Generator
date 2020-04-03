const { inputGenerator } = require('./generator');
const solutions = require('./solutions');

const ARRAY_SIZE = 10;

module.exports = [
  { 
    question: 'Somar todos os elementos de um array numerico',
    inputs: [ 
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE)
    ],
    'output-function': solutions.sumAllNumericArrayElements,
    outputs: []
  },
  {
    question: 'Maior numero do array',
    inputs: [ 
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE) 
    ],
    'output-function': solutions.getNumericArrayMaxNum,
    outputs: []
  },
  { 
    question: 'Menor numero do array',
    inputs: [ 
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE)
    ],
    'output-function': solutions.getNumericArrayMinNum,
    outputs: []
  },
  { 
    question: 'Inverter ordem do array numerico',
    inputs: [ 
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE)
    ],
    'output-function': solutions.reverseArray,
    outputs: []
  },
  {
    question: 'Subarray com todos os elementos impares',
    inputs: [
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE)
    ],
    'output-function': solutions.filterOddNumbers,
    outputs: []
  },
  {
    question: 'Subarray com todos os elementos pares',
    inputs: [
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE)
    ],
    'output-function': solutions.filterEvenNumbers,
    outputs: []
  },
  { 
    question: 'Retornar true caso exista pelo menos um numero repetido no array numerico; false se nao houver. A Solucao nao precisa ser eficiente',
    inputs: [
      inputGenerator.getRandomNumsArray(ARRAY_SIZE),
      inputGenerator.getRandomNumsArray(ARRAY_SIZE),
      inputGenerator.getRandomNumsArray(ARRAY_SIZE),
      inputGenerator.getRandomNumsArray(ARRAY_SIZE),
      inputGenerator.getRandomNumsArray(ARRAY_SIZE)
    ],
    'output-function': solutions.duplicateNumberExists,
    outputs: []
  },
  {
    question: 'Retornar a soma de todos os numeros pares e a soma de todos os numeros impares de um array numerico em um subarray. Ex: input:[1, 2, 3, 4] output: [6, 4]',
    inputs: [
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE),
      inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_SIZE)
    ],
    'output-function': solutions.filterEvenAndOddSums,
    outputs: []
  },
  {
    question: 'Verificar se a string e uma palindrome',
    inputs: [
      inputGenerator.getPalindrome(ARRAY_SIZE),
      inputGenerator.getPalindrome(ARRAY_SIZE),
      inputGenerator.getPalindrome(ARRAY_SIZE),
      inputGenerator.getPalindrome(ARRAY_SIZE + 1),
      inputGenerator.getPalindrome(ARRAY_SIZE + 1),
      inputGenerator.getPalindrome(ARRAY_SIZE + 1)
    ],
    'output-function': solutions.isPalindrome,
    outputs: []
  }
];