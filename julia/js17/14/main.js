// ### 14. 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，試寫一遞迴函數`function twofold(b, m)` 。讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。
// (細菌線性成長)
import prompt from '../utils/getUserInput.js'
import { isRequiredInput, isBlank, isInteger, isNegative, isBinOctHexAndE, isSafeInteger } from "../utils/variableCheck.js";
import { twofold } from './twofold.js';

main()

function main() {
	const m = prompt('please enter how many minutes for bacterial growth process?')
	validators(m)
	let b = 1
	const result = twofold(b, m)
	console.log(result);
}

function validators(value) {
	isRequiredInput(value)
	isBlank(value)
	isBinOctHexAndE(value)
	isInteger(value)
	isNegative(value)
	isSafeInteger(value)
}

