// Create a cipher text variable
const cipherText = "jcbhlgaxvgadcbn... vwa apw zynawly iwhdb!";

// Alphabet key
const key = {
  g: "a",
  i: "b",
  j: "c",
  m: "d",
  w: "e",
  e: "f",
  h: "g",
  p: "h",
  d: "i",
  o: "j",
  k: "k",
  v: "l",
  z: "m",
  b: "n",
  c: "o",
  f: "p",
  q: "q",
  l: "r",
  n: "s",
  a: "t",
  x: "u",
  s: "v",
  r: "w",
  u: "x",
  y: "y",
  t: "z",
  G: "A",
  I: "B",
  J: "C",
  M: "D",
  W: "E",
  E: "F",
  H: "G",
  P: "H",
  D: "I",
  O: "J",
  K: "K",
  V: "L",
  Z: "M",
  B: "N",
  C: "O",
  F: "P",
  Q: "Q",
  L: "R",
  N: "S",
  A: "T",
  X: "U",
  S: "V",
  R: "W",
  U: "X",
  Y: "Y",
  T: "Z",
};

// Define the function decodeCipher which accepts cipherText and key as parameters
export function decodeCipher(cipherText, key) {
  // Good luck!
  // Initialize an empty string to store the decoded message
  let decodedMessage = "";

  // Loop through each character in the cipherText
  for (let i = 0; i < cipherText.length; i++) {
    // Get the current character from the cipherText
    const cipherChar = cipherText[i];
    // Preserve the case of the character
    const isUpperCase = cipherChar.toUpperCase() === cipherChar;

    // Convert the character to lowercase for key lookup
    const lowercaseCipherChar = cipherChar.toLowerCase();

    // Look up the decoded character from the key object
    // If the current character is found in the key, use the corresponding decoded character
    const decodedChar = key[lowercaseCipherChar] || cipherChar;

    // Preserve the case of the decoded character
    const finalChar = isUpperCase ? decodedChar.toUpperCase() : decodedChar;

    // Append the decoded character to the decodedMessage string
    decodedMessage += finalChar;
  }

  // Return the decoded message

  return decodedMessage;
}
