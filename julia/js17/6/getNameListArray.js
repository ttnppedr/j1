import prompt from "../utils/getUserInput.js"
import { isRequiredInput, isBlank, isLetter } from "../utils/variableCheck.js"

function validators(value) {
	isRequiredInput(value)
	isBlank(value)
	isLetter(value)
}

function getNameListArray (inputCounts) {
	return Array(inputCounts)
		.fill(null)
		.map((input, index ) => {
			const questionName = `第${index+1}個`
			return getValidName(questionName)
		})	
}

function getValidName(questionName) {
	try {
		const input = prompt(questionName)
		validators(input)
		return input
	} catch (e) {
		console.log(e.message);
		return getValidName(questionName)
	}
}

export { getNameListArray } 

