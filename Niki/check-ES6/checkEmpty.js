function checkNothing(input) {
  if (input.length === 0) {
    throw new Error("請輸入值,不能為空");
  }
}

function checkAllEmpty(input) {
  // if (CheckNumber.replaceAll(" ", "").length === 0) {
  if (input.trim().length === 0) {
    throw new Error("不能只輸入空格");
  }
}

export function checkEmpty(input) {
  checkNothing(input);
  checkAllEmpty(input);
}

