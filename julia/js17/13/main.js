// ### 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?
// 世界上最快記錄!!
// 2018年8月23日，烏龜界的記錄: 每秒跑0.28公尺 (號稱「龜界博爾特」)
// 2017年12月12日的兔子界記錄: 每秒20公尺

import { getTimeGap } from "./getTimeGap.js";

function main() {
	const provocationEvery5s = 1
	const timeGap = getTimeGap(1000, 0.28, 20, provocationEvery5s)
	console.log(`兔子在途中還可以偷懶休息${timeGap}秒再繼續跑並且贏得比賽`);
}
main()

