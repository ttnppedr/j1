export function checkPositive(input) {
  if (Number(input) < 0) {
    throw new Error("請勿輸入負數");
  }
}

// module.exports = checkPositive;
