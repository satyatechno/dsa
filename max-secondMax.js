// sorting
let arr = [2, 45, 100, 65, 98, 90];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; arr[j]; j++) {
    if (arr[i] > arr[j]) {
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
  }
}
console.log('sorting==>', arr);

// find  max and secondMax value

let max = 0;
let secondMax = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
    secondMax = arr[i];
  }
}
console.log('max==>', max);
console.log('second max==>', secondMax);
