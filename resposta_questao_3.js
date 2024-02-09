function isValidString(string) {
  const openingChars = [];
  const charsMap = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  for (char of string) {
    if (char in charsMap) {
      openingChars.push(char);
    } else {
      const lastChar = openingChars.pop();
      if (!lastChar || char !== charsMap[lastChar]) {
        return;
      }
    }
  }
  return openingChars.length === 0;
}
const str1 = "{[()(){}[]]{}}";
const str2 = "{[(()]}";

console.log(
  isValidString(str1) ? "String válida" : "A string nao é valida"
);
console.log(
  isValidString(str2) ? "String válida" : "A string nao é valida"
);