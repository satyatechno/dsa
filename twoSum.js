//Two Sum – Find two numbers that add up to a target

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      //   return [map.get(complement), i];
      return [complement, nums[i]];
    }
    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

// node twoSum.js
