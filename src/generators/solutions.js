const solutions = {
  sumAllNumericArrayElements: arr => {
    return arr.reduce((acc, element) => acc + element);
  },

  getMergedNumericArraySorted: ([arr1, arr2]) => {
    const mergedArray = [...arr1, ...arr2];
    mergedArray.sort((a, b) => a - b);
    return mergedArray;
  },

  getNumericArrayMaxNum: arr => {
    return Math.max(...arr);
  },
  
  getNumericArrayMinNum: arr => {
    return Math.min(...arr);
  },

  reverseArray: arr => {
    const copy = arr.slice(0);
    return copy.reverse();
  },

  filterOddNumbers: arr => {
    return arr.filter(element => element % 2 !== 0 ? true : false);
  },

  filterEvenNumbers: arr => {
    return arr.filter(element => element % 2 === 0 ? true : false);
  },

  getCharsNoRepeatSorted: string => {
    const uniqueChars = [];
    for ( let char of string ) {
      if ( ! uniqueChars.includes(char) ) {
        uniqueChars.push(char);
      }
    }
    uniqueChars.sort((a, b) => a.localeCompare(b));
    return uniqueChars;
  },

  duplicateNumberExists: arr => {
    const copy = arr.slice(0);
    copy.sort((a, b) => a - b);
    for ( let i = 0; i < copy.length - 1; i++ ) {
      if ( copy[i] === copy[i + 1] ) {
        return true;
      }
    }
    return false;
  },

  filterEvenAndOddSums: arr => {
    return [ 
      solutions.sumAllNumericArrayElements(solutions.filterEvenNumbers(arr)), 
      solutions.sumAllNumericArrayElements(solutions.filterOddNumbers(arr))
    ];
  },

  isPalindrome: str => {
    const half = Math.floor(str.length / 2);
    for ( let i = 0; i < half; i++ ) {
      if ( str[i] !== str[str.length - 1 - i] ) {
        return false;
      }
    }
    return true;
  },

  isNumericArraySorted: arr => {
    for ( let i = 0; i < arr.length - 1; i++ ) {
      if ( arr[i + 1] < arr[i] ) { 
        return false;
      }
    }
    return true;
  },

  sumExists: (arr, target) => {
    arr.sort((a, b) => a - b);
    const pairs = [];
    for ( let i = 0; i < arr.length; i++ ) {
      for ( let j = i + 1; j < arr.length; j++ ) {
        let sum = arr[i] + arr[j];
        if ( sum > target ) break; // If sum is greater than target, there is no need to go further
        if ( sum === target ) {
          pairs.push([arr[i], arr[j]]);
          break;
        }
      }
    }
    return pairs;
  }
};

module.exports = solutions;