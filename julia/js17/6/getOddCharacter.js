export function getOddCharacter(value) {
  	const oddCharacterOfValue = value.split("").filter((item, index) => (index%2 === 0))
    return (`${value}的奇數字母分別為${oddCharacterOfValue}`);
}
