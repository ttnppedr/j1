function checkNumberDown(input, Number) {
    if (input > Number) {
      throw new Error("請勿輸入" + Number + "以上的數");
    }
}

module.exports = checkNumberDown;
