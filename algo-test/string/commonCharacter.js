function commonCharacters(string) {
  const seen = {};
  const result = [];
  for (const str of string) {
    const setStr = new Set(str);
    for (const letter of setStr) {
      if (!seen.hasOwnProperty(letter)) {
        seen[letter] = 0;
      }
      seen[letter] = seen[letter] + 1;
    }
  }

  for (const [key, value] of Object.entries(seen)) {
    if (value === string.length) {
      result.push(key);
    }
  }

  return result;
}

console.log(commonCharacters(["abc", "bcd", "cbad"]));
