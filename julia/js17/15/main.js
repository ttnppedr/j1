// ### 15. 有一輛搬運車，限重1噸 (不能超重)，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。
import { getTotalWeight } from "./getTotalWeight.js"


const equipmentList = [
	{
		item: '啞鈴',
		weight: '30',
		unit: '箱',
		Qty: '0'
	},
	{
		item: '單槓',
		weight: '20',
		unit: '箱',
		Qty: '0'
	},
	{
		item: '跑步機',
		weight: '50',
		unit: '台',
		Qty: '0'
	}
]

main()

function main() {
const weightLimits = 1000
const result = getTotalWeight(equipmentList, weightLimits)
const QtyList = (result.equipmentList).map(equipment =>
	`${equipment.item}${equipment.Qty}${equipment.unit}`
).join('\n')

console.log(`搬運車載重${result.totalWeight}公斤，分別為：\n${QtyList}\n`)
}

