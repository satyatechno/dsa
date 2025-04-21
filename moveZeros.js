//Move Zeroes – Shift all zeroes to the end

function moveZeroes(nums) {
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZero], nums[i]] = [nums[i], nums[lastNonZero]];
      lastNonZero++;
    }
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));

// node moveZeros.js
