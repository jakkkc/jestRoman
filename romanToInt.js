function romanToInt(romanNumeral) {
  const romanDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    if (i > 0 && romanDict[romanNumeral[i]] > romanDict[romanNumeral[i - 1]]) {
      result += romanDict[romanNumeral[i]] - 2 * romanDict[romanNumeral[i - 1]];
    } else {
      result += romanDict[romanNumeral[i]];
    }
  }
  return result;
}

module.exports = romanToInt;
