const minArr = [2, 3, 56, -1, 34, -2, 45, -23];

function getMin(arrDisplay) {
  let min = arrDisplay[0];
  for (let item of arrDisplay) {
    if (min > item) {
      min = item;
    }
  }
  return min;
}

const displayMin = getMin(minArr);
console.log(displayMin);
