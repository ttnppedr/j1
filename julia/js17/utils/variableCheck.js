function checkBlank(value) {
  if (value === "") {
    throw new Error("請輸入對應值或文字後再按enter")
  } if (/\s/.test(value)) {
    throw new Error("不能是空白字元喔！")
  }
}

function checkIsInteger(number) {
  if (!Number.isInteger(+number)) {
    throw new Error("請輸入整數阿拉伯數字喔！");
  }
}

function checkNegative(number) {
  if (number < 0) {
    throw new Error("不能小於0啦")
  }
}

function checkEven(number) {
  if (number%2 !== 0) {
    throw new Error("要輸入偶數喔")
  }
}

function checkLessThan4(number) {
  if (number < 4) {
    throw new Error("要輸入大於4的值喔")
  }
}

function checkIsLetter(value) {
  if(!/^[A-Za-z]+$/.test(value)){
    throw new Error("要輸入英文名字喔")
  }
}

export {
  checkBlank,
  checkIsInteger,
  checkNegative,
  checkEven,
  checkLessThan4,
  checkIsLetter
};