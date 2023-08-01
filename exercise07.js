// 7 elements and indices the same
const nums = [2, 5, 8, 1, 4, 3];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === i) {
    sum += nums[i];
  }
}

document.write(".  The sum of the elements where the value and the index are equal is: ", sum);
