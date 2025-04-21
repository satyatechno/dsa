// Find the first non-repeating character

function firstUniqChar(s) {
  const freq = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  console.log(freq);

  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return s[i];
  }

  return 'every character is repeating';
}

console.log(firstUniqChar('Satyam'));

// node firstNonRepeatingChar.js
