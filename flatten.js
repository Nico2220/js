// whrite a fonction that takes in value and return the falttened version of that value

function flatten(value) {
  // number, string, boolean, null, undifined
  if (typeof value !== "object" || value === null) {
    return value;
  }

  // array
  if (Array.isArray(value)) return flattenArray1(value);

  //object
  if (typeof value === "object") return flatObject(value);
}

function flattenArray(array) {
  return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
}

const r = flatten({
  a: 1,
  b: { c: 2, d: 3 },
  e: [4, 5, 6, [7, 8]],
}); //[1, 2, 3, [4, 5, [6, 7]]]
console.log(r);

function flattenArray1(array, initialValue = []) {
  let newArray = initialValue;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenArray1(array[i], newArray);
    } else if (
      typeof array[i] === "object" &&
      array[i] !== null &&
      !Array.isArray(array[i])
    ) {
      array.push(flatObject(array[i]));
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function flatObject(obj, initialValue = {}) {
  const newObject = initialValue;

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      flatObject(value, newObject);
    } else if (Array.isArray(value)) {
      newObject[key] = flattenArray1(value);
    } else {
      newObject[key] = value;
    }
  }
  return newObject;
}
