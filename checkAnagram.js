function isAnagram(str1, str2) {
  // Remove any non-alphabet characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

  // If lengths are different, can't be anagrams
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Sort the characters and compare
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'bello')); // false
