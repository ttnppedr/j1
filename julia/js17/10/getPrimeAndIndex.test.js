import { getPrimeAndIndex } from "./getPrimeAndIndex.js";

describe('測試是否成功取出質數及其索引值', () => {
	test('[1,2,3,4,5]', () => {
		const array = [1, 2, 3, 4, 5]
		const result = getPrimeAndIndex(array)
		const expectedResult = `2是質數，其索引值為1\n3是質數，其索引值為2\n5是質數，其索引值為4`
		expect(result).toEqual(expectedResult)
	})
	test('[11,12,13,14,15]', () => {
		const array = [11,12,13,14,15]
		const result = getPrimeAndIndex(array)
		const expectedResult = `11是質數，其索引值為0\n13是質數，其索引值為2`
		expect(result).toEqual(expectedResult)
	})
	test('[21,22,23,24,25]', () => {
			const array = [21,22,23,24,25] 
			const result = getPrimeAndIndex(array)
			const expectedResult = `23是質數，其索引值為2`
			expect(result).toEqual(expectedResult)
		})
})