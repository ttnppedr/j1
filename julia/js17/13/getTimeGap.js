export function getTimeGap(raceDistance, turtleSpeedPerSecond, rabbitSpeedPerSecond, provocationEvery5s) {
	// turtle
	let turtleSpend = raceDistance / turtleSpeedPerSecond
  // console.log(turtleSpend);

	// rabbit
	let rabbitRun = 0
	let rabbitSpend = 0
	let rabbitProvocationSpend = 0
	while (rabbitRun < raceDistance) {
		rabbitSpend++
		rabbitRun += rabbitSpeedPerSecond
		if (rabbitSpend % 5 === 0) {
			rabbitRun -= provocationEvery5s
			rabbitProvocationSpend += provocationEvery5s/rabbitSpeedPerSecond
		}
	}
	rabbitSpend += rabbitProvocationSpend
	// console.log(rabbitRun);
	// console.log(rabbitSpend);
	const result = Math.floor(turtleSpend - rabbitSpend)
	return result;
}