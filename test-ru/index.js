function binarySearch(array, target) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx <= rightIdx) {
    const middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    const midValue = array[middleIdx];

    if (midValue === target) return middleIdx;

    if (midValue < target) {
      leftIdx = middleIdx + 2;
    } else {
      rightIdx = middleIdx - 1;
    }
  }
  return -1;
}

function threeLargestNumbers(array) {
  let count = 1;
  while (count <= 3) {
    for (let i = 0; i < array.length - count; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i);
      }
    }
    count++;
  }

  return [
    array[array.length - 3],
    array[array.length - 2],
    array[array.length - 1],
  ];
}

function swap(array, i) {
  [array[i], array[i + 1]] = [array[i + 1], array[i]];
  //   let temp = array[i];
  //   array[i] = array[i + 1];
  //   array[i + 1] = temp;
}

function searchInSortMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return [row, col];
    if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  return [-1, -1];
}

const matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
];
const r = searchInSortMatrix(matrix, 44);
console.log(r);
