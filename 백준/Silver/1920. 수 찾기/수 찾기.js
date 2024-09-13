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
  let nLeng = +input[0];
  let nArr = input[1]
    .split(" ")
    .map((item) => +item)
    .sort((a, b) => a - b);
  let targetArr = input[3].split(" ").map((item) => +item);

  for (let target of targetArr) {
    let start = 0;
    let end = nLeng - 1;
    let result = false;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (nArr[mid] < target) {
        start = mid + 1;
      } else if (nArr[mid] > target) {
        end = mid - 1;
      } else if (nArr[mid] === target) {
        result = true;
        break;
      }
    }
    console.log(result ? 1 : 0);
  }
}
