// const checkEmpty = require("./checkEmpty");

export function checkZero(input) {
  if (Number(input)=== 0) {
    throw new Error("請勿輸入0");
  }
}

// module.exports = checkZero;