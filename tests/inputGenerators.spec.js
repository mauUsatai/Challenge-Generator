const { inputGenerator } = require('../src/generators/generator');

const ARRAY_LENGTH = 10;

describe('Input Generators', () => {
  describe('getRandomNumsArrayNoRepeat,', () => {
    test('Should generate an array of random positive numbers whith no repetition', () => {
      const randomNums = inputGenerator.getRandomNumsArrayNoRepeat(ARRAY_LENGTH);
      // Check if array has any duplicate numbers
      const hasDuplicateNum = false;
      const aux = [];
      for ( let n of randomNums ) {
        if ( aux.includes(n) ) {
          hasDuplicateNum = true;
          break;
        }
        aux.push(n);
      }
      expect(randomNums).toHaveLength(ARRAY_LENGTH);
      randomNums.map(n => expect(n).toEqual(expect.any(Number))); // Check if all values in array are numbers
      expect(hasDuplicateNum).toBe(false);
    });
  });

  describe('getRandomNumsArray', () => {
    test('Should generate an array of random positive numbers', () => {
      const randomNums = inputGenerator.getRandomNumsArray(ARRAY_LENGTH); 
      randomNums.map(n => expect(n).toEqual(expect.any(Number))); // Check if all values in array are numbers
      expect(randomNums).toHaveLength(ARRAY_LENGTH);
    });
  });

  describe('getPalindrome', () => {
    test('Should generate a palindrome (string) around 50% of the times run', () => {
      const strings = [];
      const numberOfStrings = 1000;
      for ( let i = 0; i < numberOfStrings; i++ ) {
        strings.push(inputGenerator.getPalindrome(ARRAY_LENGTH));
      }
      // Check if strings are palindromes or not
      const half = Math.floor(ARRAY_LENGTH / 2);
      let nonPalindromeCount = 0;
      for ( string of strings ) {
        for ( let i = 0; i < half; i++ ) {
          if ( string[i] !== string[string.length - 1 - i] ) {
            nonPalindromeCount++;
            break;
          }
        }  
      }
      const probabilityOfPalindrome = ( numberOfStrings - nonPalindromeCount ) / numberOfStrings;

      expect(strings[0]).toHaveLength(ARRAY_LENGTH);
      expect(probabilityOfPalindrome).toBeGreaterThan(0.45);
      expect(probabilityOfPalindrome).toBeLessThan(0.55);
    });
  });

  describe('getNumericArraySorted', () => {
    test('Should generate a sorted numeric array 50% of the time run', () => {
      const arrays = [];
      const numberOfArrays = 1000;
      for ( let i = 0; i < numberOfArrays; i++ ) { // Generate 50 strings
        arrays.push(inputGenerator.getNumericArraySorted(ARRAY_LENGTH));
      }

      let unsortedCount = 0;
      for ( let array of arrays ) {
        for ( let i = 0; i < array.length - 1; i++ ) {
          if ( array[i + 1] < array[i] ) {
            unsortedCount++;
            break;
          }
        }
      }
      const sortedPercentage = ( numberOfArrays - unsortedCount ) / numberOfArrays;

      expect(arrays[0]).toHaveLength(ARRAY_LENGTH);
      expect(sortedPercentage).toBeGreaterThan(0.45);
      expect(sortedPercentage).toBeLessThan(0.55);
    });
  });
});
