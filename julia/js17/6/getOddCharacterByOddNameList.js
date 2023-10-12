import { isRequiredInput, isBlank, isLetter } from "../utils/variableCheck.js";
import { getOddCharacter } from "./getOddCharacter.js"


export function getOddCharacterByOddNameList(array) {
	array.forEach(validators);
	const oddNameList = array.filter((item, index) => index % 2 === 0)
	const OddCharacterByOddNameList = oddNameList.map((item) => {
		return getOddCharacter(item)
	})
	return OddCharacterByOddNameList
}

function validators(value) {
	isRequiredInput(value)
	isBlank(value)
	isLetter(value)
}