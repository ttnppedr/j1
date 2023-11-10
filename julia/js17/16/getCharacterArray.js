import { isRequiredInput, isBlank, isCharacter } from "../utils/variableCheck.js";
import prompt from '../utils/getUserInput.js'

export function getCharacterArray(value) {
	const characterArray =
		Array(value)
			.fill(null)
			.map((item, index) => {
				const ranking = index + 1
				const result = getCharacter(ranking).toLowerCase()
				return result
			})
	// console.log(characterArray);
	return characterArray
}

function getCharacter(ranking) {
	try {
		const input = prompt(`第${ranking}個`)
		validators(input)
		return input
	} catch (e) {
		console.log(e.message);
		return getCharacter(ranking)
	}
}

function validators(value) {
	isBlank(value)
	isRequiredInput(value)
	isCharacter(value)
}