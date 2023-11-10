import { getNewArrayAfterDisplacement } from "./getNewArrayAfterDisplacement.js"

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

describe('測試偏移量改變，是否回傳正確加密值', () => {
	test('[a,b,c,d,e],偏移量10', () => {
		const displacement = 10
		const testArray = ['a', 'b', 'c', 'd', 'e']
		const result = getNewArrayAfterDisplacement(testArray, displacement)
		const expectResult = ['k', 'l', 'm', 'n', 'o']
		expect(result).toStrictEqual(expectResult)
	}),
		test('[v,w,x,y,z],偏移量10', () => {
			const displacement = 10
			const testArray = ['v', 'w', 'x', 'y', 'z']
			const result = getNewArrayAfterDisplacement(testArray, displacement)
			const expectResult = ['f', 'g', 'h', 'i', 'j']
			expect(result).toStrictEqual(expectResult)
		})
})