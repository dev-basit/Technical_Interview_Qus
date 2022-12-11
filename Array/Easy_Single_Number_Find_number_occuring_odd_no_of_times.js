/* 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/*
//   --------------- Method 1 - O(n^2) time & O(1) space
(function () {
  let nums = [1, 3, 3, 1, 1];
  let count = 0;

  for (let i of nums) {
    count = 0;
    //   for each element repeat again, if you find nums[i]==nums[j], add 1 to count
    for (let j of nums) if (i === j) count += 1;

    //   if count modulo 2 not = 0, return it
    if (count % 2 === 1) {
      console.log(i);
      return i;
    }
  }
})();
*/

/*
//   --------------- Method 2 - O(n*logn) time & O(1) space
(function () {
  let nums = [1, 2, 2, 4, 2, 2, 1, 2];
  let length = nums.length;
  let count = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    if (nums[i] == nums[i - 1]) count += 1;
    else {
      if (count % 2 === 1) {
        console.log(nums[i - 1]);
        return nums[i - 1];
      }
      count = 1;
    }
  }
})();
*/

/*
//  ---------------- Method 3 - O(n) time & O(k) space
(function () {
  let nums = [2, 2, 4, 2, 3, 2, 3, 4, 4];
  let allOccurence = {};

  for (let value of nums) {
    if (!allOccurence[value]) allOccurence[value] = 1;
    else allOccurence[value] += 1;
  }

  for (let i in allOccurence) {
    if (allOccurence[i] % 2 === 1) {
      console.log("odd occurence no is ", i);
      break;
    }
  }
})();
*/

/*
// buddy/wrong
//  ---------------- Method 4 - O(n) time & O(1) space
(function () {
  let nums = [3, 1, 1, 3, 3, 2];
  let length = nums.length;
  let xor = nums[0];

  for (let i = 1; i < length; i++) xor = xor ^ nums[i];

  console.log(xor);
})();
*/
