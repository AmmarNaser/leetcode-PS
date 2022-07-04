const twoSum = function (nums, target) {
  const num = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (num.has(target - nums[i])) {
      return [num.get(target - nums[i]), i];
    } else {
      num.set(nums[i], i);
    }
  }
};
