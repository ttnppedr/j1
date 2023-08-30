// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

export function getTicketPrice(age, price) {  
  return age <= 6 || age >= 65 ? `優待票:${price/2}元` : `全票:${price}元`    
}


