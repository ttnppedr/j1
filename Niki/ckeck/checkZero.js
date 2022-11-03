const checkEmpty = require("./checkEmpty");

function checkZero(input) {
  if (Number(input)=== 0) {
    throw new Error("請勿輸入0");
  }
}

module.exports = checkZero;