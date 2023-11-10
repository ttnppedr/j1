import { getTimeGap } from "./getTimeGap.js";

describe('測試time gap是否正確', () => {
	test('烏龜每秒跑10公尺，兔子每秒跑20公尺，賽道總長200公尺，兔子挑釁每跑5秒後退1公尺', () => {
		const result = getTimeGap(200, 10, 20, 1)
		expect(result).toBe(8)
	})
	test('烏龜每秒跑5公尺，兔子每秒跑10公尺，賽道總長300公尺，兔子挑釁每跑5秒後退2公尺', () => {
		const result = getTimeGap(300, 5, 10, 2)
		expect(result).toBe(26)
	})
})