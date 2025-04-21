// You are given a palindromic string s.
// Return the lexicographically smallest palindromic permutation of s.
// Input: s = "babab"
// Output: "abbba"
// Explanation:
// Rearranging "babab" → "abbba" gives the smallest lexicographic palindrome.
// Input: s = "daccad"
// Output: "acddca"

const smallestPalindrome = (str = 'bacadadadacab') => {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let shortedChar = Object.keys(freq).sort();

  let oddCount = 0;
  let oddChar = '';
  let half = '';
  for (let char of shortedChar) {
    if (freq[char] % 2 !== 0) {
      oddCount++;
      oddChar = char;
    }
    half = half + char.repeat(Math.floor(freq[char] / 2));
  }

  let reverseHalf = half.split('').reverse().join('');

  if (oddCount > 1) {
    return 'Not Possible';
  }
  if (oddCount) {
    return half + oddChar + reverseHalf;
  }
  return half + reverseHalf;
};

console.log(smallestPalindrome());

// node smallestPalindromString.js
