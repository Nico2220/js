// function searchForRange(array, target) {
//   let leftIdx = 0;
//   let rightIdx = array.length - 1;

//   while (leftIdx <= rightIdx) {
//     const midIdx = Math.floor((leftIdx + rightIdx) / 2);

//     if (target === array[midIdx]) {
//       let i = midIdx - 1;
//       while (i >= 0 && target === array[i]) {
//         i--;
//       }

//       let j = midIdx + 1;
//       while (j < array.length && target === array[j]) {
//         j++;
//       }

//       return [i + 1, j - 1];
//     }

//     if (target < array[midIdx]) {
//       rightIdx = midIdx - 1;
//     } else {
//       leftIdx = midIdx + 1;
//     }
//   }

//   return [-1, -1];
// }

function searchForRange(array, target) {
  const range = [];
  range[0] = findLeftIndex(array, target);
  range[1] = findRigthIndex(array, target);
  return range;
}

function findLeftIndex(array, target) {
  let index = -1;
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    if (target <= array[midIndex]) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }

    if (target === array[midIndex]) {
      index = midIndex;
    }
  }
  return index;
}

function findRigthIndex(array, target) {
  let index = -1;
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    if (target >= array[midIndex]) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }

    if (target === array[midIndex]) {
      index = midIndex;
    }
  }
  return index;
}

console.log(
  searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 45)
);
