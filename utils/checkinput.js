// 判斷輸入值，排除小數點、負數
function checkNum(input) {
  if (!Number.isInteger(+input) || +input < lowerLimit) {
    return false; //非整數、小於0 回傳false
  }
  if (+input >= lowerLimit) {
    return +input;
  }
}
module.exports = {
  checkNum: function () {
    return checkNum;
  },
};
