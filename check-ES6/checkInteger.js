export function checkInteger(input) {
  if (!Number.isInteger(Number(input))) {
    throw new Error("請勿輸入非整數");
  }
}

// module.exports = checkInteger;