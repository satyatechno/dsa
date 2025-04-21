//Reverse a String / Array – In-place

function reverseString(str) {
  const arr = str.split('');
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join('');
}

console.log(reverseString('hello'));

// node reverseString.js
