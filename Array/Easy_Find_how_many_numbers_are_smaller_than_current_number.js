/*
1365. How Many Numbers Are Smaller Than the Current Number
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.
*/

/*
// ------------------- Method 1 - O(n^2) time & O(1) space
(function () {
  let nums = [8, 1, 2, 2, 3];
  //   let nums = [6, 5, 4, 8];
  //   let nums = [7, 7, 7, 7];

  let output = [];
  let count;

  for (let i of nums) {
    count = 0;

    for (let j of nums) {
      if (j < i) count = count + 1;
    }
    output.push(count);
  }
  console.log(output);
  return output;
})();
*/

/*
// ------------------- Method 2 - O(n^2) time  & O(n) space
(function () {
  // let nums = [8, 1, 2, 2, 3];
  let nums = [6, 5, 6];
  // let nums = [7, 7, 7, 7];
  let numsDuplicate = [];
  let noOfSmallerElements = [0];
  let output = [];

  for (let value of nums) numsDuplicate.push(value);

  nums.sort(); //4,5,6,8

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) noOfSmallerElements.push(i);

    if (nums[i] === nums[i - 1])
      noOfSmallerElements.push(noOfSmallerElements[noOfSmallerElements.length - 1]);
  }

  // for value in numsDuplicate, find its index in nums, and for that index value find its value in noOfSmallestElement
  for (let value of numsDuplicate) {
    let indexInNums = nums.indexOf(value);
    output.push(noOfSmallerElements[indexInNums]);
  }

  console.log("output", output); //
})();
*/

/*
// ------------------- Method 3 - O(n) time, taking help of constraints, i.e., max value will be 100, so we tak an array that contains 100 elements
(function () {
  // let nums = [5, 0, 10, 0, 10, 6];
  let nums = [8, 1, 2, 2, 3];
  // let nums = [6, 5, 4, 8];
  // let nums = [7, 7, 7, 7];
  let hundredArray = [];
  let output = [];

  for (let i = 0; i <= 101; i++) hundredArray[i] = 0;

  // traverse i/p array, and increment index at nums[i] in hundredsArray by 1
  for (let value of nums) hundredArray[value] = hundredArray[value] + 1;

  // prefix sum
  for (let i = 1; i < hundredArray.length; i++) hundredArray[i] = hundredArray[i] + hundredArray[i - 1];

  // traverse i/p array
  for (let i in nums) {
    if (nums[i] > 0) {
      output.push(hundredArray[nums[i] - 1]);
      continue;
    }
    output.push(0);
  }
  console.log("output", output);
})();
*/
