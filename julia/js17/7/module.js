// 印出下圖，並轉 90°
//  ** ** 
//  ******* 
// *********
// *********
//  *******
//   *****
//    ***
//     *
export {strToArr2D, arr2DToStr, rotate90} 


function strToArr2D(str) {
	return str.split('\n').map(item => item.split(""))
}

function arr2DToStr(arr2D) {
	return arr2D.map(item => item.join('')).join('\n')
}

function rotate90(arr, row, col) {
	let arrRotate90 = [];
	for (let i = 0; i < col; i++) {  //行迴圈
		let eachRowForArrRotate90 = [];  //輔助陣列
		for (let j = 0; j < row; j++) {  //列迴圈
			eachRowForArrRotate90[j] = arr[j][i];  //定義陣列b的元素值
		}
		arrRotate90[i] = eachRowForArrRotate90;  //把陣列b賦值給陣列a
	}
	return arrRotate90.map(item => item.reverse());  //返回二維數列

}

