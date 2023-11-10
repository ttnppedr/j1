const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export function getNewArrayAfterDisplacement(arr, displacement) {
	const correspondingIndexArray = getCorrespondingIndexArray(arr)
	return correspondingIndexArray.map(item => {
		let indexAfterDisplacement = item + displacement
		if (indexAfterDisplacement >= alphabet.length) {
			indexAfterDisplacement -= alphabet.length
		}
		return alphabet[indexAfterDisplacement]
	})
}

function getCorrespondingIndexArray(arr) {
	return arr.map(item => {
		for (let i = 0; i < alphabet.length; i++) {
			if (item === alphabet[i]) {
				return i
			}
		}
	})
}

// export function getNewArrayAfterDisplacement(arr, displacement) {
// 	return arr.map(item => {
// 			let indexAfterDisplacement = item + displacement
// 			if (indexAfterDisplacement >= alphabet.length) {
// 				indexAfterDisplacement -= alphabet.length
// 			}
// 			return alphabet[indexAfterDisplacement]
// 		})
// }

