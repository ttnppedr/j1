// ### 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，並利用`do while`計算，印出總費用
import prompt from '../utils/getUserInput.js'
import { getAmount } from './getAmount.js';
import { isRequiredInput, isBlank, isZero, isInteger, isNegative, isBinOctHexAndE } from "../utils/variableCheck.js";

function main() {
	try {
		const input = prompt('您要先預訂幾期呢？每五期折200喔！')
		validators(input)
		// let termination = 1
		const result = getAmount(input, 500, 0.79, 200)
	  console.log(`您預訂${input}期，費用總共是${result.totalFee}元，恭喜您省了${result.totalDiscount}元。`);
	} catch (e) {
		console.log(e.message);
		main()
	}
}

main()

function validators(value) {
	isRequiredInput(value)
	isBlank(value)
	isZero(value)
	isBinOctHexAndE(value)
	isInteger(value)
	isNegative(value)
}