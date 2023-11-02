import { sumArr } from "./sumArr.js"

describe('測試是否成功相加', () => {
	test('兩者相加為[0,0,0,0,0]', () => {
		const arr1 = [0, 0, 0, 0, 0]
		const arr2 = [0, 0, 0, 0, 0]
		const result = sumArr(arr1, arr2)
		const expectedSumArr = [0, 0, 0, 0, 0]
		expect(result).toEqual(expectedSumArr)
	})
	test('兩者相加為[5,5,5,5,5]', () => {
		const arr1 = [1, 2, 3, 3, 4]
		const arr2 = [4, 4, 4, 2, 1]
		const result = sumArr(arr1, arr2)
		const expectedSumArr = [5, 6, 7, 5, 5]
		expect(result).toEqual(expectedSumArr)
	})
})