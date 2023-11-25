// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const key = arr[i];
//     j = i - 1;
//     while (j >= 0 && arr[j] < key) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// const r = insertionSort([5, 2, 4, 6, 1, 3]);
// console.log(r);

// function mergeSort(array) {
//   let middleIndex = Math.floor(array.length / 2);

//   if (middleIndex === 1) return 1;

//   const leftArray = mergeSort(array.slice(0, middleIndex).sort());
//   const rightArray = mergeSort(array.slice(middleIndex, array.length));

//   let i = 0;
//   let j = 0;
//   let k = 0;

//   while (i < leftArray.length && j < rightArray.length) {
//     if (leftArray[i] <= rightArray[j]) {
//       array[k] = leftArray[i];
//       i++;
//     } else {
//       array[k] = rightArray[j];
//       j++;
//     }
//     k++;
//   }

//   while (i < leftArray.length) {
//     array[k] = leftArray[i];
//     i++;
//     k++;
//   }

//   while (j < rightArray.length) {
//     array[k] = rightArray[j];
//     j++;
//     k++;
//   }

//   return;
// }

// function bubbleSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         // [array[j], array[j + 1]] = [array[j + 1], array[i]];
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }

//   return array;
// }

//

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smalestIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[smalestIndex] > array[j]) {
        smalestIndex = j;
      }
    }
    [array[i], array[smalestIndex]] = [array[smalestIndex], array[i]];
  }

  return array;
}

console.log(selectionSort([5, 2, 4, 6, 1, 3]));
