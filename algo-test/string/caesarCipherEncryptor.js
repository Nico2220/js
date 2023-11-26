function caesarCipherEncryptor(string, key) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  const newWord = [];
  for (const letter of string) {
    const letterIndex = alphabet.indexOf(letter);
    const newKey = letterIndex + (key % 26);

    if (newKey < 26) {
      newWord.push(alphabet[newKey]);
    } else {
      console.log(alphabet[newKey]);
      newWord.push(alphabet[newKey % 26]);
    }
  }
  return newWord.join("");
}

console.log(caesarCipherEncryptor("xyz", 2));
