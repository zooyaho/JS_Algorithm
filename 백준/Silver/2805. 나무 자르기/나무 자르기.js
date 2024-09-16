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
  let [n, m] = input[0].split(" ").map((item) => +item);
  let treeHeightArr = input[1]
    .split(" ")
    .map((item) => +item)
    .sort((a, b) => a - b);

  let result = 0;
  let start = 0;
  let end = treeHeightArr[treeHeightArr.length - 1];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sumResult = 0;

    for (let tree of treeHeightArr) {
      if (tree > mid) sumResult += tree - mid;
    }

    if (sumResult >= m) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(result);
}
