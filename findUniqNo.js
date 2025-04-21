// Given an array of size (2N-1), and it contains all the elements starting from 1 to N twice. But one of the numbers has occurred only once, write a function to find out that number
// Examples: [1,3,4,5,4,2,3,5,1] and n = 5
// Output : 2
// Explanation : 2 occurs only 1 times..

const findUniqNo = (arr = [1, 3, 4, 5, 4, 2, 3, 5, 1], n = 5) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return n * (n + 1) - sum;
};

const findUniqNo2 = (arr = [1, 3, 4, 5, 4, 2, 3, 5, 1], n = 5) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result ^ arr[i];
  }
  return result;
};

console.log(findUniqNo());
console.log(findUniqNo2());

// node findUniqNo.js
