let arr1 = [0, 3, 4, 31, 31, 56, 78];
let arr2 = [3, 4, 7, 8, 12, 34, 56, 78];
let output = [];

console.log(output);

//check input
if (arr1.length === 0) output = arr2;
if (arr2.length === 0) output = arr1;

let i = 0;
let j = 0;
let k = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) output[k++] = arr1[i++];
  else output[k++] = arr2[j++];
}

while (i < arr1.length) output[k++] = arr1[i++];
while (j < arr2.length) output[k++] = arr2[j++];

console.log(output);
