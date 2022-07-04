var containsDuplicate = function (nums) {
  const num = nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1]) {
      return true;
    }
  }
  return false;
};

// solution with hashMap().

var containsDuplicate = function (nums) {
  const num = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (num.has(nums[i])) {
      return true;
    }

    num.set(nums[i]);
  }

  return false;
};
