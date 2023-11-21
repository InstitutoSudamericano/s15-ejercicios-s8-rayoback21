// 6 Mostrar la suma elementos que no sean múltiplos de 7
const nums = [21,14,10,38,5,7];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 7 !== 0) {
    sum += nums[i];
  }
}
document.write(".  The sum of the elements that are not multiples of 7 is:", sum);
