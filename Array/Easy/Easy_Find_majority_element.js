/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
*/

/*
//  ----------------- Method 1 - O(n^2) time
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

/*
//  ----------------- Method 2 - O(nlogn) time
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

/*
//  ----------------- Method 3 - O(n) time, and O(k) space
(function () {
  let elements = [1, 0, 1, 1];
  let noOfRepetitions = {};
  let length = elements.length;

  // initialize an object for values in nums array
  for (let value of elements) {
    if (!noOfRepetitions[value]) noOfRepetitions[value] = 1;
    else noOfRepetitions[value] += 1;
  }

  let majorityElement;
  let maxRepeated = 0;

  for (let i in noOfRepetitions) {
    if (noOfRepetitions[i] > maxRepeated) {
      majorityElement = i;
      maxRepeated = noOfRepetitions[i];
    }
  }

  if (maxRepeated > length / 2) {
    console.log("maj element is", majorityElement, "and repeated", maxRepeated, " times");
    return [majorityElement, maxRepeated];
  }
})();
*/

/*
//  ----------------- Method 4 - O(n) time & O(1) space
(function () {
  let elements = [0, 1, 0];
  let majorityElement = elements[0];
  let length = elements.length;
  let count = 0;

  for (let value of elements) {
    if (count === 0) {
      majorityElement = value;
      count += 1;
    } else {
      if (majorityElement === value) count += 1;
      else count -= 1;
    }
  }

  let maxRepeated = 0;

  //  final traversal, confirming majority element
  for (let value of elements) if (value === majorityElement) maxRepeated += 1;

  if (maxRepeated > length / 2)
    console.log("majority element is ", majorityElement, "and it repeated ", maxRepeated, " times");
  else console.log("no majority element");
})();
*/
