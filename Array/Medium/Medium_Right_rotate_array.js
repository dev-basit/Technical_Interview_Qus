// Given an array, rotate the array to the right by k steps, where k is non-negative.

/*
//  ------------------------ Method 1 - O(n^2) time & O(1) space
(function () {
  let nums = [1, 2, 3, 4, 5, 6, 7];
  let noOfRotation = 2;

  //   pop each item and unshift (add at the very first positon) immediately
  for (let i = 1; i <= noOfRotation; i++) nums.unshift(nums.pop());

  console.log(nums);
  return nums;
})();
*/

/*
//  ------------------------ Method 2 - O(k) time & O(k) space
// manually implementation, above method is using builtin functions
(function () {
  let nums = [5, 10, 15, 20, 25, 30];
  let temp = [];
  let length = nums.length;
  let noOfRotation = 7;
  let count = noOfRotation % length;

  console.log(count);

  // copy the last n items into new temp array
  for (let i = 0; i < count; i++) {
    temp.push(nums[length - count + i]);
  }

  console.log(temp);

  // shift by n, the n-i item till 0th item in original array
  for (let i = length - 1; i >= count; i--) {
    nums[i] = nums[i - count];
  }

  // start from 0th item in temp array and place it in original array in respective position
  for (let i = 0; i < count; i++) {
    nums[i] = temp[i];
  }

  // temp = [];
  console.log(nums);
  return nums;
})();
*/

/*
//  ------------------------ Method 3 - O(n) time & O(k) space
(function () {
  let nums = [1, 2, 3, 4, 5, 6, 7];
  let length = nums.length;
  let noOfRotation = 16;

  let elementsRemoved = nums.splice(length - noOfRotation);
  nums = [...elementsRemoved, ...nums];

  console.log(elementsRemoved);
  console.log(nums);
})();
*/

/*
//  ------------------------ Method 4 - Inplace - O(n) time & O(1) space
(function () {
  let nums = [1, 2, 3, 4, 5, 6];
  let length = nums.length;
  let noOfRotation = 3 % length;

  console.log(nums);

  function reverse(array, low, high) {
    while (low < high) {
      let temp = array[low];
      array[low] = array[high];
      array[high] = temp;

      low += 1;
      high -= 1;
    }
  }

  reverse(nums, length - noOfRotation, length - 1); // O(k)
  reverse(nums, 0, length - noOfRotation - 1); // O(n-k)
  reverse(nums, 0, length - 1); // O(n)

  console.log(nums);
})();
*/
