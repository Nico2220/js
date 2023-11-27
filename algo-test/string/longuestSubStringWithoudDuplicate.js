function longuestSubStringWithoudDuplicate(string) {
  const lastSeen = {};
  let startIndex = 0;
  let longuestSubString = [0, 1];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (lastSeen.hasOwnProperty(char)) {
      startIndex = Math.max(startIndex, lastSeen[char] + 1);
    }

    if (longuestSubString[1] - longuestSubString[0] < i - startIndex + 1) {
      longuestSubString = [startIndex, i + 1];
    }

    lastSeen[char] = i;
  }
  return string.slice(longuestSubString[0], longuestSubString[1]);
}

console.log(longuestSubStringWithoudDuplicate("clementisacap"));
