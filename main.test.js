// Import vitest and functions
import { test, expect } from "vitest";
import { decodeCipher } from "./main.js";

test("Should decode 'pwvvc' to 'hello", () => {
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
