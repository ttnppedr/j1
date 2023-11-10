import { getScore } from "./getScore.js"

const candidateScoreBoard = [{ number: '1' }, { number: '2' }, { number: '3' }, { number: '4' }]

const votingComposition = [
	{
		votes: '100',
		order: {
			1: '1',
			2: '3',
			3: '2',
			4: '4'
		}
	},
	{
		votes: '100',
		order: {
			1: '3',
			2: '2',
			3: '4',
			4: '1'
		}
	},
	{
		votes: '100',
		order: {
			1: '2',
			2: '3',
			3: '4',
			4: '1'
		}
	},
	{
		votes: '100',
		order: {
			1: '4',
			2: '3',
			3: '2',
			4: '1'
		}
	},
]

const votesForEachComposition = votingComposition.map(composition => {
	return composition.votes
})
const orderKeyPairForEachComposition = votingComposition.map(composition => {
	return Object.entries(composition.order)
})

test('票數變更為各組合皆100票，3號候選人總分應為1300', () => {

	const result = getScore(votesForEachComposition, orderKeyPairForEachComposition, candidateScoreBoard[2].number)
	expect(result).toBe(1300)
})