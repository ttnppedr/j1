// 8. 試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數 `function  divi(n)` 來求算當 n 值不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0。

import { isRequiredInput ,isBlank, isInteger, isNegative, isBinOctHexAndE } from "../utils/variableCheck.js";
import { divi } from './divi.js';

function validators(value) {
	isRequiredInput(value)
  isBlank(value)
  isBinOctHexAndE(value)
  isInteger(value)
  isNegative(value)
}

export function getCountsWhileValidInputDiviedeByDivisor(input, divisor, counts) {
	validators(input)

	const result = divi(input, input, divisor, counts)
	return result;
}