function checkEven(input) {
  if (input % 2 !== 0) {
    throw new Error("請勿輸入奇數");
  }
}

module.exports = checkEven;
