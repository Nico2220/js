const arr1 = ["nico", "dave", "bouls", "wud"];
const arr2 = ["wud", "nico", 6];

const newArray = arr2.reduce(function (acc, curr, array) {
  console.log(acc, curr);
  return curr;
});

console.log("newArray=", newArray);

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
