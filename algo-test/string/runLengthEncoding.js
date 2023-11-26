function runLengthEncoding(string) {
  let count = 1;
  let encodStr = [];
  for (let i = 1; i < string.length; i++) {
    let previousLetter = string[i - 1];
    let currentLetter = string[i];

    if (currentLetter === previousLetter && count < 9) {
      count++;
    } else {
      encodStr.push(count + previousLetter);
      count = 1;
    }

    if (i === string.length - 1) {
      encodStr.push(count + previousLetter);
    }
  }

  return encodStr.join("");
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
