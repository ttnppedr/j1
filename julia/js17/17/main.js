// ### 17. 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)

// ![](https://i.imgur.com/rWpuyyk.png)
import { getScore } from "./getScore.js"

const candidateScoreBoard = [{ number: '1' }, { number: '2' }, { number: '3' }, { number: '4' }]

const votingComposition = [
	{
		votes: '51',
		order: {
			1: '1',
			2: '3',
			3: '2',
			4: '4'
		}
	},
	{
		votes: '5',
		order: {
			1: '3',
			2: '2',
			3: '4',
			4: '1'
		}
	},
	{
		votes: '23',
		order: {
			1: '2',
			2: '3',
			3: '4',
			4: '1'
		}
	},
	{
		votes: '21',
		order: {
			1: '4',
			2: '3',
			3: '2',
			4: '1'
		}
	},
]

main()

function main() {
	const votesForEachComposition = votingComposition.map(composition => {
		return composition.votes
		// [ '51', '5', '23', '21' ]
	})
	const orderKeyPairForEachComposition = votingComposition.map(composition => {
		return Object.entries(composition.order)
		// 	 [
		//   [ [ '1', '1' ], [ '2', '3' ], [ '3', '2' ], [ '4', '4' ] ],
		//   [ [ '1', '3' ], [ '2', '2' ], [ '3', '4' ], [ '4', '1' ] ],
		//   [ [ '1', '2' ], [ '2', '3' ], [ '3', '4' ], [ '4', '1' ] ],
		//   [ [ '1', '4' ], [ '2', '3' ], [ '3', '2' ], [ '4', '1' ] ]
		//   ]
	})

	// 加上分數
	candidateScoreBoard.forEach(candidate => {
		candidate.score = getScore(votesForEachComposition, orderKeyPairForEachComposition, candidate.number)
	})
	//整理列印文字
	const showScore =
		candidateScoreBoard
			.map(candidate => {
				return `候選人${candidate.number}號為${candidate.score}分`
			})
	//尋找當選人
	const electedPerson =
		candidateScoreBoard
			.reduce(function (winner, curr) {
				if (winner[1] < curr.score) {
					winner[1] = curr.score
					winner[0] = curr.number
				}
				return winner
				//winner = [candidate.number, candidate.score]
			}, ["", 0])

	console.log(`候選人${electedPerson[0]}號勝出，所有候選人計分如下：${'\n'}${showScore.join('\n')}`);
}

