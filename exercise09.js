// 9 Mostrar la suma de los índices donde el índice sea menor al elemento
const nums = [0, 2, 1, 4];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  if (i < nums[i]) {
    sum += i;
  }
}
document.write(".  The sum of the indices where the index is less than the element is: ", sum);

