//  Total 5 methods

//  ------------------- Method 1 - O(n^2)
/*
(function () {
  let nums = [10, 2, 4, 1, 6, 3, 9, 8, 5];
  let length = nums.length;
  let found = false;

  // run a loop from 1, 10 , in each iteration compare with all values of nums and
  //   check if each element is present in it or not
  for (let j = 1; j <= 10; j++) {
    found = false;

    for (let i = 0; i < length; i++) {
      if (j === nums[i]) {
        found = true;
        break;
      }
    }

    if (!found) console.log(j);
  }
})();
*/

//  ------------------- Method 2 - O(nlogn)
/*
(function () {
  let nums = [5, 2, 4, 3, 6, 7, 9, 8, 1];
  nums.sort((a, b) => a - b);

  let length = nums.length;

  for (let i = 0; i <= length; i++) {
    if (i + 1 !== nums[i]) {
      console.log(i + 1);
      break;
    }
  }
})();
*/

//  ------------------- Method 3 -  O(n) time & O(k) space
/*
(function () {
  let nums = [6, 2, 1, 3, 8, 7, 4, 5, 10];
  let arrayCount = {};
  let length = nums.length;

  for (let i = 1; i <= 10; i++) arrayCount[i] = false;

  for (let value of nums) arrayCount[value] = true;

  for (let i = 1; i <= 10; i++) if (!(arrayCount[i] === true)) console.log(i);
})();
*/

//  ------------------- Method 4 - O(n) time
/*
(function () {
  //  sum of first n integers = (n*(n+1))/2
  //  first calculate sum of 1st n integers, then sum all the elements in nums,
  //  finaly subtract sum of 1st n integers from sum of all elements in nums

  let nums = [1, 5, 4, 10, 6, 7, 9, 8, 2];
  let sumOfArrayElements = 0;
  let arrayLength = nums.length+1; //in this case 10

  console.log("initialy sum is ", sumOfArrayElements);

  for (let value of nums) sumOfArrayElements += value;

  console.log("sum of all elements in nums array is ", sumOfArrayElements);

  let sumOfFirstNIntegers = (arrayLength * (arrayLength + 1)) / 2;
  console.log("sum of 1st n integer is ", sumOfFirstNIntegers);

  let difference = sumOfFirstNIntegers - sumOfArrayElements;
  console.log("Missing element is ", difference);
})();

*/

//  ------------------- Method 5 - O(n) time
/*
(function () {
  let nums = [8, 10, 4, 3, 5, 2, 9, 7, 6];
  let length = nums.length;
  let x1 = 1;
  let x2 = nums[0];

  // find xor for first n number including missing number, and store in x1
  for (let i = 2; i <= length + 1; i++) x1 ^= i;

  // iterate through nums, and take xor of each element with its successors, not including missing number, and store it in var2
  for (let i = 1; i <= length; i++) x2 ^= nums[i];

  // take xor of var1 and var2
  console.log(x1 ^ x2);
})();
*/
