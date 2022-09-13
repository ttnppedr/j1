function checkDecimal(input) {
  if (input !== String(Number(input))) {
    throw new Error("請輸入十進位數字");
  }
}

module.exports = checkDecimal;
