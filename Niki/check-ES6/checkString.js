export function checkString(input) {
  if (isNaN(Number(input))) {
    throw new Error("請勿輸入文字");
  }
}

// module.exports = checkString;