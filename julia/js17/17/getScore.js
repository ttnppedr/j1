export function getScore(votesForEachComposition, orderKeyPairForEachComposition, candidateNumber) {
	const basicPoint = 5
	let score = 0
	for (let i = 0; i < votesForEachComposition.length; i++) {
		for (let j = 0; j < orderKeyPairForEachComposition.length; j++) {
			if (orderKeyPairForEachComposition[i][j][1] === candidateNumber) {
				score += (+votesForEachComposition[i]) * (basicPoint - (+orderKeyPairForEachComposition[i][j][0]))
			}
		}
	}
	return score
}
