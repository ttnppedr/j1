import { getAmount } from './getAmount.js';

describe('測試輸入期數及折扣，總金額是否正確', () => {
	test('第一期全額0折扣，預訂4期', () => {
		const input = 4
		const terminationFee = 500
		const newEntryDiscount = 1
		const discountForEvery5terms = 200
		const result = getAmount(input, terminationFee, newEntryDiscount, discountForEvery5terms)
		expect(result.totalFee).toBe(2000)
		expect(result.totalDiscount).toBe(0)
	})
	test('第一期79折，預訂7期', () => {
		const input = 7
		const terminationFee = 500
		const newEntryDiscount = 0.79
		const discountForEvery5terms = 200
		const result = getAmount(input, terminationFee, newEntryDiscount, discountForEvery5terms)
		expect(result.totalFee).toBe(3195)
		expect(result.totalDiscount).toBe(305)
	})
	test('第一期79折，預訂20期', () => {
		const input = 20 
		const terminationFee = 500
		const newEntryDiscount = 0.79
		const discountForEvery5terms = 200
		const result = getAmount(input, terminationFee, newEntryDiscount, discountForEvery5terms)
		expect(result.totalFee).toBe(9095)
		expect(result.totalDiscount).toBe(905)
	})

})