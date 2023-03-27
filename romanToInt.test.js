const romanToInt = require("./romanToInt");

test("romanToInt function works", () => {
  expect(romanToInt("I")).toBe(1);
  expect(romanToInt("V")).toBe(5);
  expect(romanToInt("IX")).toBe(9);
  expect(romanToInt("XL")).toBe(40);
  expect(romanToInt("LXXXVIII")).toBe(88);
  expect(romanToInt("CDXCIV")).toBe(494);
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
