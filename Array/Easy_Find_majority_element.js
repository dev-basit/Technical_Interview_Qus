/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
*/

//  ----------------- Method 1 - O(n^2) time
/*
(function () {
  let nums = [0, 1, 1];
  let count = 0;
  let length = nums.length;

  //   loop 1 from index 0 to index[length -1]
  for (let valueI of nums) {
    //   loop 2, from index 0 to index[length -1], if element matches, count ++
    //   at the end of the loop if count is greater than the length+1/2, return it else retun 0
    for (let valueJ of nums) {
      if (valueI === valueJ) count = count + 1;

      if (count > length / 2) {
        console.log("Maj Element ", valueI, " repeated ", count, " times "); //
        return [valueI, count];
      }
    }
    count = 0;
  }

  if (!(count > length / 2)) {
    console.log("no majority element"); //
    return -1;
  }
})();
*/

//  ----------------- Method 2 - O(nlogn) time
/*
(function () {
  let nums = [2, 2, 1, 1, 2];
  nums.sort();
  let count = 1;
  let length = nums.length;

  //   loop, start from index 1 to len-1, and check if element matches , if so add 1 to count
  for (let i = 1; i < length; i++) {
    if (nums[i] == nums[i - 1]) count += 1;
    else count = 1;

    if (count > length / 2) {
      console.log("Maj Element is ", nums[i], " repeated ", count, " times "); //
      return [nums[i], count];
    }
  }

  console.log("no majority element"); //
  return -1;
})();
*/

//  ----------------- Method 3 - O(n) time, and O(n) space
/*
(function () {
  let nums = [1, 0, 1, 1];
  let numsDict = {};
  let length = nums.length;

  // initialize an object for values in nums array
  for (let value of nums) {
    if (!numsDict[value]) numsDict[value] = 1;
    else numsDict[value] += 1;
  }

  let maxPair = {};
  let count = 0;
  for (let i in numsDict) {
    if (numsDict[i] > count) {
      maxPair = {};
      count = numsDict[i];
      maxPair[i] = numsDict[i];
    }
  }

  let greatestElement = Object.keys(maxPair); // maxPair has only 1 property, it will get key of first property
  if (maxPair[greatestElement] > length / 2) {
    console.log(
      "maj element ",
      parseInt(greatestElement),
      "repeated ",
      maxPair[greatestElement]
    );
    return [maxPair[greatestElement], greatestElement];
  }
})();
*/

//  ----------------- Method 4 - O(n) time
/*
(function () {
  let nums = [0, 1, 1];
  let count = 0;
  let majorityElement = nums[0];

  length = nums.length;

  for (let value of nums) {
    if (count === 0) {
      majorityElement = value;
      count += 1;
    } else {
      if (majorityElement == value) count += 1;
      else count -= 1;
    }
  }

  //  reusing the same count variable,
  count = 0;

  //  final traversal, confirming majority element
  for (let value of nums) if (value == majorityElement) count += 1;

  if (count > length / 2)
    console.log(
      "majority element is ",
      majorityElement,
      "and it repeated ",
      count,
      " times"
    );
  else console.log("no majority element");
})();
*/
