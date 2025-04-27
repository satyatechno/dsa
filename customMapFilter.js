// customMap

function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// customFilter

function customFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// customReduce

function customReduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

const arr = [1, 2, 3, 4];

// customMap
console.log(customMap(arr, (num) => num * 2)); // [2, 4, 6, 8]

// customFilter
console.log(customFilter(arr, (num) => num % 2 === 0)); // [2, 4]

// customReduce
console.log(customReduce(arr, (acc, curr) => acc + curr, 0)); // 10
