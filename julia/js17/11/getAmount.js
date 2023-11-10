export function getAmount(subscription, terminationFee, newEntryDiscount, discountForEvery5terms) {
	let totalFee = 0
	let count = 0
	let termination = 1
	do {
		if (termination === 1) {
			totalFee -= Math.round(500 * (1 - newEntryDiscount))
		}
		if (termination % 5 === 0) {
			count++
			totalFee -= discountForEvery5terms
		}
		totalFee += terminationFee
		termination++
	} while (
		termination <= subscription
	);
	let totalDiscount = Math.round(500 * (1 - newEntryDiscount)) + discountForEvery5terms * count
	return { totalFee, totalDiscount };

}