function getRandom(value) {
	const randomNum = Math.floor(Math.random() * value)
	return randomNum
}
export function getTotalWeight(equipmentList, weightLimits) {
	let totalWeight = 0
	while (totalWeight < weightLimits) {
		let randomNum = getRandom(equipmentList.length)
		let randomEquipment = equipmentList[randomNum]
		totalWeight += +(randomEquipment.weight)
		if (totalWeight > weightLimits) {
			totalWeight -= +(randomEquipment.weight)
			return { equipmentList, totalWeight }
		}
		let specificQty = +(randomEquipment.Qty)
		specificQty += 1
		randomEquipment.Qty = String(specificQty)
	}
	return { equipmentList, totalWeight }
}