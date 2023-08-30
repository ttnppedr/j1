import { getTicketPrice } from "./module.js";

describe('測試是否為優待票', () => {
  const regularTicket = 400
  test('5歲小妹妹', () => {
    const age = 5    
    const result = getTicketPrice(age,regularTicket)
    expect(result).toBe(`優待票:200元`)
  })
  test('82歲老奶奶', () => {
    const age = 82
    const result = getTicketPrice(age, regularTicket)
    expect(result).toBe(`優待票:200元`)
  })
  test('30歲正妹', () => {
    const age = 30
    const result = getTicketPrice(age, regularTicket)
    expect(result).toBe(`全票:400元`)
  })
})