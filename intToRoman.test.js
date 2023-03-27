const intToRoman = require("./intToRoman");

test("intToRoman function works", () => {
  expect(intToRoman(1)).toBe("I");
  expect(intToRoman(5)).toBe("V");
  expect(intToRoman(9)).toBe("IX");
  expect(intToRoman(40)).toBe("XL");
  expect(intToRoman(88)).toBe("LXXXVIII");
  expect(intToRoman(494)).toBe("CDXCIV");
  expect(intToRoman(1994)).toBe("MCMXCIV");
});
