import { graphRotate90 } from "./graphRotate90";

describe('驗證結果', () => {
	test('測試簡單三角形', () => {
		const triangle = `12345\n 678 \n  9  `
		const triangelRotate90 = `  1\n 62\n973\n 84\n  5`
		const result = graphRotate90(triangle)
		expect(result).toEqual(triangelRotate90)
	})
	test('測試簡單長方形', () => {
		const rectangle = `1234\n5678\n9abc`
		const rectangelRotate90 = `951\na62\nb73\nc84`
		const result = graphRotate90(rectangle)
		expect(result).toEqual(rectangelRotate90)
	})

})