// Import vitest and functions
import { test, expect } from "vitest";
import { decodeCipher } from "./main.js";

// Prove that the function can take in singular words
test("Should decode 'pwvvc' to 'hello'", () => {
  // alphabet key here
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
  };

  // Arrange
  const cipherText = "pwvvc";
  const expectedDecodedMessage = "hello";

  // Act
  const actualDecodedMessage = decodeCipher(cipherText, key);

  // Assert
  expect(actualDecodedMessage).toStrictEqual(expectedDecodedMessage);
});

// Prove that the function can take in a string and handle spaces
test("Should decode 'pwvvc rclvm!' to 'hello world!'", () => {
  // alphabet key here
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
  };

  // Arrange
  const cipherText = "pwvvc rclvm!";
  const expectedDecodedMessage = "hello world!";

  // Act
  const actualDecodedMessage = decodeCipher(cipherText, key);

  // Assert
  expect(actualDecodedMessage).toStrictEqual(expectedDecodedMessage);
});

// Prove that the function can take in numbers and not decode them
test("Should decode '123' to '123'", () => {
  // alphabet key here
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
  };

  // Arrange
  const cipherText = "123";
  const expectedDecodedMessage = "123";

  // Act
  const actualDecodedMessage = decodeCipher(cipherText, key);

  // Assert
  expect(actualDecodedMessage).toStrictEqual(expectedDecodedMessage);
});

// Prove that the function can take in punctuation and not decode it
test("Should decode '?!' to '?!'", () => {
  // alphabet key here
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
  };

  // Arrange
  const cipherText = "?!";
  const expectedDecodedMessage = "?!";

  // Act
  const actualDecodedMessage = decodeCipher(cipherText, key);

  // Assert
  expect(actualDecodedMessage).toStrictEqual(expectedDecodedMessage);
});
