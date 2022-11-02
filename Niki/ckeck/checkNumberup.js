function checkNumberup(input, Number) {
  if (input < Number) {
    throw new Error("請勿輸入" + Number + "以下的數");
  }
}

module.exports = checkNumberup;
