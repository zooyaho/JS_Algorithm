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
  let N = +input[0];
  let timeList = input[1]
    .split(" ")
    .map((num) => +num)
    .sort((a, b) => a - b);

  let result = 0;
  let prevTimes = 0;

  for (let i = 0; i < N; i++) {
    prevTimes += timeList[i];
    result += prevTimes;
  }

  console.log(result);
}
