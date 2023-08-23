Array.prototype.myMap = function (callback) {
  // Write your code here.
  console.log("this", this);
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const r = callback(this[i], i, this);
    result[i] = r;
  }
  return result;
};

Array.prototype.myFilter = function (callback) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    const r = callback(this[i], this.length, this);
    if (r) {
      output.push(this[i]);
    }
  }

  return output;
};

Array.prototype.myReduce = function (callback, initialValue) {
  // Write your code here.
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (i === 0 && accumulator === undefined) {
      accumulator = this[i];
    } else {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

const myArray = [1, 2, 3, 4, -1, -2];

const newArray = myArray.myMap(MapCallBack);
const filteredArray = myArray.myFilter(filterCalback);
const reduceArray = myArray.myReduce(reduceCalBack);
console.log(reduceArray);

function MapCallBack(currentValue, index, array) {
  return currentValue * 2;
}

function filterCalback(currentValue, index, array) {
  return currentValue < 0;
}

function reduceCalBack(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}
