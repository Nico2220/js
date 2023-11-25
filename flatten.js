// whrite a fonction that takes in value and return the falttened version of that value

// function flatten(value) {
//   // number, string, boolean, null, undifined
//   if (typeof value !== "object" || value === null) {
//     return value;
//   }

//   // array
//   if (Array.isArray(value)) return flattenArray1(value);

//   //object
//   if (typeof value === "object") return flatObject(value);
// }

// function flattenArray(array) {
//   return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
// }

// const r = flatten({
//   a: 1,
//   b: { c: 2, d: 3 },
//   e: [4, 5, 6, [7, 8]],
// }); //[1, 2, 3, [4, 5, [6, 7]]]
// console.log(r);

// function flattenArray1(array, initialValue = []) {
//   let newArray = initialValue;
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       flattenArray1(array[i], newArray);
//     } else if (
//       typeof array[i] === "object" &&
//       array[i] !== null &&
//       !Array.isArray(array[i])
//     ) {
//       array.push(flatObject(array[i]));
//     } else {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// function flatObject(obj, initialValue = {}) {
//   const newObject = initialValue;

//   for (const [key, value] of Object.entries(obj)) {
//     if (typeof value === "object" && value !== null && !Array.isArray(value)) {
//       flatObject(value, newObject);
//     } else if (Array.isArray(value)) {
//       newObject[key] = flattenArray1(value);
//     } else {
//       newObject[key] = value;
//     }
//   }
//   return newObject;
// }

function flatten(value) {
  if (typeof value !== "object" || value == null) {
    // console.log(value);
    return value;
  }

  if (Array.isArray(value)) {
    return flattenArray(value);
  }

  return flattenObject(value);
}

function flattenArray(value) {
  let newArray = [];
  value.forEach((el) => {
    // if (typeof el !== "object" || el == null) {
    //   newArray.push(el);
    // } else if (Array.isArray(el)) {
    //   newArray = [...newArray, flat(el)];
    // } else {
    //   // newArray.push(flattenObject(el));
    // }

    newArray = newArray.concat(flatten(el));
  });
  return newArray;
}

function flattenObject(object) {
  let flatObj = {};
  for (const [key, value] of Object.entries(object)) {
    const flattenedValue = flatten(value);

    const isObject =
      typeof value === "object" && value !== null && !Array.isArray(value);
    if (isObject) {
      flatObj = { ...flatObj, ...flattenedValue };
    } else {
      flatObj[key] = flattenedValue;
    }
  }

  return flatObj;
}

const books = [
  { title: "Book 1", genre: "Fiction" },
  { title: "Book 2", genre: "Fiction" },
  { title: "Book 3", genre: "Fantasy" },
  { title: "Book 4", genre: "Science Fiction" },
  { title: "Book 5", genre: "Fantasy" },
  { title: "Book 6", genre: "Science Fiction" },
];

function groupByGender(books) {
  const res = books.reduce((acc, { title, genre }) => {
    if (!acc.hasOwnProperty(genre)) {
      acc[genre] = [];
    }
    acc[genre].push({ title, genre });
    return acc;
  }, {});
  console.log("reduce baybe", res);
}

function deepEqual(value1, value2) {
  if (typeof value1 !== typeof value2) return false;

  if (typeof value1 !== "object" || value1 === null) {
    if (
      typeof value1 === "number" &&
      typeof value2 === "number" &&
      isNaN(value1) &&
      isNaN(value2)
    ) {
      return true;
    }

    return value1 === value2;
  }

  if (Array.isArray(value1) && !Array.isArray(value2)) return false;
  if (Array.isArray(value2) && !Array.isArray(value1)) return false;

  if (Array.isArray(value1)) {
    return deepEqualArray(value1, value2);
  }

  return deepEqualObject(value1, value2);
}

function deepEqualArray(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const result = deepEqual(arr1[i], arr2[i]);
    if (!result) return false;
  }
  return true;
}

function deepEqualObject(obj1, obj2) {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);

  if (keysObj1.length !== keysObj2.length) return false;

  for (const key1 of keysObj1) {
    if (!obj2.hasOwnProperty(key1)) return false;

    if (!deepEqual(obj1[key1], obj2[key1])) return false;
  }

  return true;
}

console.log(deepEqual(NaN, NaN));
