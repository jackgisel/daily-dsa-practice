function twoSum(nums, sum) {
  let hasSum = false;
  nums.forEach((num) => {
    const coPart = sum - num;
    if (nums.includes(coPart)) hasSum = true;
  });
  return hasSum;
}

const case1 = twoSum([1, 3, 8, 2], 10); // true
console.log("should be true, got: ", case1);

const case2 = twoSum([3, 9, 13, 7], 8); // true
console.log("should be false, got: ", case2);

const case3 = twoSum([4, 2, 6, 5, 2], 4); // true
console.log("should be true, got: ", case3);
