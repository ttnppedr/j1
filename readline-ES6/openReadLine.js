import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export function openReadLine(question) {
  const rl = readline.createInterface({ input, output });
  return new Promise(async function (resolve) {
    const input = await rl.question(question);
    rl.close();
    resolve(input);
  });
}