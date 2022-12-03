/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
*/

/*
//  --------------------- Method 1 - O(n^2)
let nums = [2, 7, 11, 15];
// let nums = [3, 2, 4];
// let nums = [3, 3];
let target = 6;

function twoSum(nums, target) {
  for (let i in nums)
    for (let j in nums) if ((nums[i] + nums[j] === target) & (nums[i] !== nums[j])) return [i, j];

  return -1;
}

console.log(twoSum(nums, target));
*/

/*
//  --------------------- Method 2 - O(n^2)
// let nums = [2, 7, 11, 15];
let nums = [3, 2, 4];
// let nums = [3, 3];
let target = 6;

function twoSum1(nums, target) {
  for (let value of nums) {
    if (nums.includes(target - value)) {
      index1 = nums.indexOf(value);
      index2 = nums.indexOf(target - value);

      if (index1 !== index2) return [index1, index2];
    }
  }
  return -1;
}

console.log(twoSum1(nums, target));
*/

/*
//  --------------------- Method 3 - O(n^2) - ZTM
// let nums = [2, 7, 11, 15];
let nums = [3, 2, 4];
// let nums = [3, 3];
let target = 6;

function twoSum(nums, target) {
  let numberToFind;
  for (let i = 0; i < nums.length; i++) {
    numberToFind = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (numberToFind === nums[j] && i != j) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(twoSum(nums, target));
*/

//  --------------------- Method 4 - O(n) time & O(n) space

// let nums = [2, 7, 11, 15];
// let nums = [3, 2, 4];
let nums = [3, 3];
let target = 0;
let differences = {};

function twoSum2(nums, target) {
  let numberToFind;
  for (let i = 0; i < nums.length; i++) {
    numberToFind = target - nums[i];
    differences[numberToFind] = i;
  }

  for (let i = 0; i < nums.length; i++)
    if (differences[nums[i]] && i != differences[nums[i]]) return [i, differences[nums[i]]];

  return -1;
}

console.log(twoSum2(nums, target));
console.log(differences);
