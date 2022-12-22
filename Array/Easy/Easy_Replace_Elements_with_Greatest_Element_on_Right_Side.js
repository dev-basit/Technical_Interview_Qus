/*
1299. Replace Elements with Greatest Element on Right Side
Given an array arr, replace every element in that array with the greatest element among the elements 
to its right, and replace the last element with -1. After doing so, return the array.
*/

/*
// ----------------------------- Method 1 - O(n^2)
(function () {
  let arr = [17, 18, 5, 4, 6, 1];
  const length = arr.length;

  if (length === 1) return arr;

  let output = [];
  for (let i = 0; i < length; i++) output.push(0);
  output[length - 1] = -1;

  let max;
  for (let i = 0; i < length - 1; i++) {
    max = arr[i];

    for (let j = i + 1; j < length; j++) {
      if (arr[j] > max) max = arr[j];

      output[i] = max;
    }
  }

  return output;
})();
*/

/*
// ----------------------------- Method 2 - O(n) time
(function () {
  let arr = [17, 18, 5, 4, 6, 1];
  let length = arr.length;

  if (length === 1) return arr;

  // let output = [...Array(length).keys()];
  let output = [];
  output[length - 1] = -1;

  console.log(output);

  for (let i = length - 2; i >= 0; i--) {
    output[i] = Math.max(arr[i + 1], output[i + 1]);
  }

  console.log(output);
  return output;
})();
*/
