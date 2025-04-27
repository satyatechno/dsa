// find the group of anagrams in an array

function groupAnagrams(words) {
  const map = new Map();

  for (let word of words) {
    // Sort the word to get the "signature"
    const sorted = word.split('').sort().join('');
    // Group by sorted signature
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }

  return Array.from(map.values());
}

// Example usage:
const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(words));
