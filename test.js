const array = [1, 2, 3, 4, 5];

console.log(array.reduce((acc, curr) => acc + curr, 0));

function customReduce(array, initialValue) {
  let sum = initialValue;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log("sum=", sum);
  return sum;
}

customReduce(array, 0);
