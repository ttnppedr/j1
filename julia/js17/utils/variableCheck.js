function isRequiredInput(value) {
  if (value === "") {
    throw new Error("未輸入喔！")
  }
}


function isBlank(value) {
  if (/\s/.test(value)) {
    throw new Error("不能是空白字元喔！")
  }
}

function isInteger(number) {
  if (!Number.isInteger(+number)) {
    throw new Error("請輸入整數阿拉伯數字喔！");
  }
}

function isNegative(number) {
  if (+number < 0) {
    throw new Error("不能小於0啦")
  }
}

function isEven(number) {
  if (+number % 2 !== 0) {
    throw new Error("要輸入偶數喔")
  }
}

function isNotLessThanY(x, y) {
  if (+x < +y) {
    throw new Error(`要輸入大於${y}的值喔`)
  }
}

function isBinOctHexAndE(input) {
  if (input.startsWith('0b')) {
    throw new Error("不支援2進制,請輸入0~9阿拉伯數字")
  }

  if (input.startsWith('0o')) {
    throw new Error("不支援8進制,請輸入0~9阿拉伯數字")
  }

  if (input.startsWith('0x')) {
    throw new Error("不支援16進制,請輸入0~9阿拉伯數字")
  }
  
  if (input.includes('e')) {
    throw new Error("不支援e科學符號,請輸入0~9阿拉伯數字")
  }

}

export {
  isRequiredInput,
  isBlank,
  isInteger,
  isNegative,
  isEven,
  isNotLessThanY,
  isBinOctHexAndE
};