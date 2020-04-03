const solutions = {
  sumAllNumericArrayElements: arr => {
    return arr.reduce((acc, element) => acc + element);
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
  }
};

module.exports = solutions;