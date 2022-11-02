function openReadLine() {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return rl;
}


function readLine(question) {
  return new Promise(function (resolve) {
    const rl = openReadLine();
    rl.question(question, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

module.exports = readLine ;