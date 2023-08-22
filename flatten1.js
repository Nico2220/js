function flatten(value) {
  if (Array.isArray(value)) return formatArray(value);

  if (value !== null && typeof value === "object") return formatObject(value);

  return value;
}

function formatArray(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      newArray = [...newArray, ...formatArray(array[index])];
    } else if (typeof array[index] === "object") {
      newArray.push(formatArray(index));
    } else {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

function formatObject(value) {
  let newObj = {};
  const keys = value ? Object.keys(value) : [];

  for (const key of keys) {
    if (
      !Array.isArray(value[key]) &&
      value[key] != null &&
      typeof value[key] === "object"
    ) {
      let reutrnIterator = formatObject(value[key]);
      newObj = { ...newObj, ...reutrnIterator };
    } else if (Array.isArray(value[key])) {
      newObj[key] = formatArray(value[key]);
    } else {
      newObj[key] = value[key];
    }
  }
  return newObj;
}

const v = [1, 2, [3, 4]];
const obj = {
  a: 4,
  b: { c: 5, d: 6 },
  c: v,
};

const r = flatten(obj);
console.log(r);
