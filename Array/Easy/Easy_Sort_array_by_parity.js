/*
Given an integer array nums, move all the even integers at the beginning of the array followed by
all the odd integers. Return any array that satisfies this condition.
*/

/*
//  ------------------------ Method 1 - O(n) // confirm it, whether shift and unshift operation is O(1) or not
(function () {
  let nums = [3, 1, 2, 4];
  let length = nums.length;
  let output = [];
  let oddElements = [];
  let evenElements = [];

  for (let value of nums) {
    if (value % 2 == 0) evenElements.push(value);
    else oddElements.push(value);
  }

  console.log(evenElements);
  console.log(oddElements);

  for (let i = evenElements.length; i > 0; i--) {
    topElement = evenElements.pop();
    output.push(topElement);
  }

  for (let i = oddElements.length; i > 0; i--) {
    topElement = oddElements.pop();
    output.push(topElement);
  }

  console.log(evenElements);
  console.log(oddElements);
  console.log(output);
  return output
})();
*/

/*
//  ------------------------ Method 2 - O(n) time
(function () {
  let nums = [0, 1, 4, 2, 3, 5, 6, 1, 4, 3];
  // let nums = [3, 1, 2, 4];
  let length = nums.length;
  let right = length - 1;
  let left = 0;

  while (left < right) {
    if ((nums[left] % 2 === 0) | (nums[left] === 0)) {
      left += 1;
      continue;
    }

    if ((nums[right] % 2 !== 0) & !(nums[right] === 0)) {
      right -= 1;
      continue;
    }

    if ((nums[left] % 2 !== 0) & (nums[left] !== 0) & ((nums[right] % 2 === 0) | (nums[right] === 0))) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;

      left += 1;
      right -= 1;
    }
  }
  console.log(nums);
  return nums;
})();
*/

/*
// ------------------------- Method 3 - O(n) time
(function () {
  let nums = [0, 1, 4, 2, 3, 5, 6, 1, 4, 3];
  // let nums = [3, 1, 2, 4];
  // let nums = [2, 1, 0, 1, 0];
  let length = nums.length;
  let right = length - 1;
  let left = 0;

  while (left < right) {
    if (nums[left] % 2 === 0) {
      left += 1;
    } else {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;

      right -= 1;
    }
  }

  console.log(nums);
  return nums;
})();
*/

// ------------------------- Method 4 - idea came in my mind
// same qus for linked list
