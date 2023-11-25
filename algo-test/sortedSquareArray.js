// function sortedSquaredArray(arr) {
//   let leftPointer = 0;
//   let rightPointer = arr.length - 1;
//   const squaredArray = [];

//   for (let i = arr.length - 1; i > -1; i--) {
//     const leftValue = arr[leftPointer] * arr[leftPointer];
//     const rightValue = arr[rightPointer] * arr[rightPointer];

//     if (rightValue > leftValue) {
//       squaredArray[i] = rightValue;
//       rightPointer--;
//     } else {
//       squaredArray[i] = leftValue;
//       leftPointer++;
//     }
//   }

//   return squaredArray;
// }

// function twoSumNumbers(array, targetSum) {
//   const nums = {};
//   for (let i = 0; i < array.length; i++) {
//     const potentialMatch = targetSum - array[i];
//     if (potentialMatch in nums) {
//       return [array[i], potentialMatch];
//     }

//     nums[array[i]] = true;
//   }

//   return [];
// }

// console.log(twoSumNumbers([3, 5, -4, 8, 11, 1, -1, 6], 10));

function longestPeak(array) {
  let longest = 0;
  for (let i = 1; i < array.length - 1; i++) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];

    if (!isPeak) continue;

    let leftIndex = i - 1;
    while (array[leftIndex - 1] < array[leftIndex]) {
      leftIndex--;
    }

    let rightIndex = i + 1;
    while (array[rightIndex + 1] < array[rightIndex]) {
      rightIndex++;
    }

    const currentLength = rightIndex - leftIndex + 1;
    longest = Math.max(currentLength, longest);
  }

  return longest;
}

function MonotonicArray(array) {
  let direction = 0;
  for (let i = 0; i < array.length - 1; i++) {
    const firstValue = array[i];
    const secondValue = array[i + 1];

    if (direction === 0) {
      direction = secondValue - firstValue;
    }
    if (direction > 0 && firstValue > secondValue) return false;
    if (direction < 0 && firstValue < secondValue) return false;
  }

  return true;
}

function productArray(array) {
  const products = [];
  for (let i = 0; i < array.length; i++) {
    let leftProduct = 1;
    let rightProduct = 1;

    let left = i - 1;
    while (left >= 0) {
      leftProduct *= array[left];
      left--;
    }

    let right = i + 1;
    while (right < array.length) {
      rightProduct *= array[right];
      right++;
    }
    products[i] = leftProduct * rightProduct;
  }

  return products;
}

function productsArray2(array) {
  let leftProducts = [];
  let rightProducts = [];
  let products = [];

  let leftProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftProduct;
    leftProduct *= array[i];
  }

  let rightProduct = 1;
  for (let i = array.length - 1; i > -1; i--) {
    rightProducts[i] = rightProduct;
    rightProduct *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    products[i] = leftProducts[i] * rightProducts[i];
  }

  return products;
}

function firstDuplicatevalue(array) {
  const nums = new Set();
  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    if (num in nums) {
      return num;
    }

    nums[num] = true;
  }
}
