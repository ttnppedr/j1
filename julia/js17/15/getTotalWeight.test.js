import { getTotalWeight } from "./getTotalWeight.js";

const equipmentList = [
	{
		item: '啞鈴',
		weight: '30',
		unit: '箱',
		Qty: '0'
	},
	{
		item: '單槓',
		weight: '20',
		unit: '箱',
		Qty: '0'
	},
	{
		item: '跑步機',
		weight: '50',
		unit: '台',
		Qty: '0'
	}
]



describe('測試總重是否小於等於限重', () => {
	test('weightLimits = 500', () => {
		const weightLimits = 500
		const result = getTotalWeight(equipmentList, weightLimits)
		expect(result.totalWeight).not.toBeGreaterThan(weightLimits)
	})
	test('weightLimits = 300', () => {
		const weightLimits = 300
		const result = getTotalWeight(equipmentList, weightLimits)
		expect(result.totalWeight).not.toBeGreaterThan(weightLimits)
	})
	test('weightLimits = 2000', () => {
		const weightLimits = 2000
		const result = getTotalWeight(equipmentList, weightLimits)
		expect(result.totalWeight).not.toBeGreaterThan(weightLimits)
	})
})
