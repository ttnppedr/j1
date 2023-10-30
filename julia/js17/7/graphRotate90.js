import { strToArr2D, rotate90, arr2DToStr } from "./module.js"

export function graphRotate90(originalGraph) {
	const originalArr = strToArr2D(originalGraph)
	const originalCol = originalArr[0].length
	const originalRow = originalArr.length

	const arr2DRotate90 = rotate90(originalArr, originalRow, originalCol)
	const strRotate90 = arr2DToStr(arr2DRotate90)
	return (strRotate90);

}