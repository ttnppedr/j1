// const result = require("./Q1.module");

import {result} from "./Q1.module.js"

test("0  to 今天不播放電影", () => {
  expect(result(0)).toEqual("今天不播放電影");
});
test("1  to 照常播放電影", () => {
  expect(result(1)).toEqual("照常播放電影");
});
// test("1  to 今天不播放電影", () => {
//   expect(2+2).toBe(4);
// });
// test("1  to 今天不播放電影", () => {
//   expect(2+2).toEqual(4);
// });
// test("1  to 今天不播放電影", () => {
//   expect(2+2).not.toEqual(5);
// });