function caesarCipherEncryptor(string, key) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  const newWord = [];
  for (const letter of string) {
    const letterIndex = alphabet.indexOf(letter);
    const newKey = letterIndex + (key % 26);

    if (newKey < alphabet.length) {
      newWord.push(alphabet[newKey]);
    } else {
      newWord.push(alphabet[newKey % alphabet.length]);
    }
  }
  return newWord.join("");
}

console.log(caesarCipherEncryptor("xyz", 2));
