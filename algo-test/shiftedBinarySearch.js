function shiftedBinarySeach(array, target) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx <= rightIdx) {
    const middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (array[middleIdx] === target) return middleIdx;

    if (array[leftIdx] < array[middleIdx]) {
      if (target >= array[leftIdx] && target < array[middleIdx]) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    } else {
      if (array[middleIdx] > target && target < array[rightIdx]) {
        leftIdx = middleIdx + 1;
      } else {
        rightIdx = middleIdx - 1;
      }
    }
  }
}

console.log(shiftedBinarySeach([45, 61, 71, 72, 73, 0, 1, 21, 33, 37], 33));
