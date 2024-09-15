const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  let mArr = input[1]
    .split(" ")
    .map((item) => +item)
    .sort((a, b) => a - b);
  let targetArr = input[3].split(" ").map((item) => +item);

  const cntObj = mArr.reduce((acc, cur, arr) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});

  let result = "";
  for (let targetNum of targetArr) {
    result += (cntObj[targetNum] || 0) + " ";
  }
  console.log(result.trim());
}
