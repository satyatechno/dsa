// find the deepest value of an object

function findDeepestValue(obj) {
  let maxDepth = 0;
  let deepestValue;

  function helper(currentObj, depth) {
    if (typeof currentObj !== 'object' || currentObj === null) {
      if (depth > maxDepth) {
        maxDepth = depth;
        deepestValue = currentObj;
      }
      return;
    }

    for (const key in currentObj) {
      helper(currentObj[key], depth + 1);
    }
  }

  helper(obj, 0);
  return deepestValue;
}

// Example
const testObj = {
  a: {
    b: {
      c: {
        d: {
          e: 'deepest',
        },
      },
    },
  },
  x: {
    y: 'shallow',
  },
};

console.log(findDeepestValue(testObj)); // Output: "deepest"

// node findDeepValueOfObj.js
