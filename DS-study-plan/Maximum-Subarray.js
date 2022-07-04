/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  if (nums.length == 1) return nums[0];

  let maxValue = nums[0];
  let accNum = nums[0];

  for (i = 1; i < nums.length; i++) {
    let value = Math.max(nums[i], accNum + nums[i]);
    if (value > maxValue) maxValue = value;
    accNum = value;
  }
  return maxValue;
};
