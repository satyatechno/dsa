// Given an array that may contain nested arrays, return a flat array with all the elements.
// Example:
// flatten([1, [2, [3, 4], 5], 6])
// Output: [1, 2, 3, 4, 5, 6]

function flatten(arr) {
  let result = [];

  for (let el of arr) {
    if (Array.isArray(el)) {
      result = result.concat(flatten(el));
    } else {
      result.push(el);
    }
  }

  return result;
}

console.log(flatten([1, [2, [3, 4], 5], 6]));

// node flatArray.js
