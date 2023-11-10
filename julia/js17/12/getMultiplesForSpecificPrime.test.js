//找出`10~20`的質數，並列出前述各質數在1~100的倍數

import { getMultiplesForSpecificPrime } from "./main.js";

describe("驗證結果", () => {
	test('找出7~11的質數，並列出其在1~50的倍數', () => {
		const result = getMultiplesForSpecificPrime(7, 11, 1, 50)
		const expectResult = `7~11之間，第1個質數為7，其1~50間的倍數有7,14,21,28,35,42,49。\n7~11之間，第2個質數為11，其1~50間的倍數有11,22,33,44。`
		expect(result).toEqual(expectResult)
	})
	test('找出20~25的質數，並列出其在50~100的倍數', () => {
		const result = getMultiplesForSpecificPrime(20, 25, 50, 100)
		const expectResult = `20~25之間，第1個質數為23，其50~100間的倍數有50,100。`
		expect(result).toEqual(expectResult)
	})

})

