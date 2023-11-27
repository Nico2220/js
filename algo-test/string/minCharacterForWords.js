function minCharacterForWords(words) {
  let currentCount = {};
  const finalCount = {};
  for (const word of words) {
    currentCount = {};
    for (const el of word) {
      if (!currentCount.hasOwnProperty(el)) {
        currentCount[el] = 0;
      }
      currentCount[el] += 1;
    }

    for (const [key, value] of Object.entries(currentCount)) {
      if (finalCount.hasOwnProperty(key)) {
        finalCount[key] = Math.max(finalCount[key], value);
      } else {
        finalCount[key] = value;
      }
    }
  }

  const result = [];
  for (const [key, value] of Object.entries(finalCount)) {
    for (let i = 0; i < value; i++) {
      result.push(key);
    }
  }
  console.log(result);
}

console.log(
  minCharacterForWords(["this", "that", "did", "deed", "them!", "a"])
);
