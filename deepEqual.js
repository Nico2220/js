function deepEquals(valueOne, valueTwo) {
  //check for type
  if (typeof valueOne !== typeof valueTwo) return false;

  // for check for primitive value
  if (typeof valueOne !== "object") {
    // ( NaN !== NaN) weird js.
    //we should return true if both values are Nan
    if (Number.isNaN(valueOne) && Number.isNaN(valueTwo)) return true;
    return valueOne === valueTwo;
  }

  //cheks for null it self beacause null is type of Object. Weird js
  if (valueOne === null || valueTwo === null) return valueOne === valueTwo;

  if (Array.isArray(valueOne)) {
    if (valueOne.length !== valueTwo.length) return false;

    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) return false;
    }
    return true;
  }

  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);

  if (valueOneKeys.length !== valueTwoKeys.length) return false;
  for (const key of valueOneKeys) {
    //cheks if for case like {a: 1} , {b:1}
    if (!valueTwo.hasOwnProperty(key)) return false;

    if (!deepEquals(valueOne[key], valueTwo[key])) return false;
  }
  return true;
}

//type of null === object
console.log(
  deepEquals(
    [{ a: true, b: {} }, {}, {}, [1, "2", null, true, { c: "abc" }, 0]],
    [{ a: true, b: {} }, {}, {}, [1, 2, null, true, { c: "abc" }, 0]]
  )
);

//primitive type : null
