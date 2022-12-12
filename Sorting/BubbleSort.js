// let numbers = [2, 5, 1, 3, 7, 9, 0];
let numbers = [2, 5, 1];
const length = numbers.length;
// let temp;

console.log("\nlength", length);
console.log(numbers);

for (let i = 0; i < length; i++) {
  for (let j = 0; j < length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]; // swap
    }
  }
}

console.log(numbers);
