// ### 16. 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果
import { getCharacterArray } from "./getCharacterArray.js"
import { getNewArrayAfterDisplacement } from "./getNewArrayAfterDisplacement.js"


main()

function main() {
	const displacement = 3
	const characterQty = 5
	console.log(`請輸入${characterQty}個字母`);
	const characterArray = getCharacterArray(characterQty)
	const newArray = getNewArrayAfterDisplacement(characterArray, displacement)
	console.log(`加密結果為${newArray.join('')}`);
}



