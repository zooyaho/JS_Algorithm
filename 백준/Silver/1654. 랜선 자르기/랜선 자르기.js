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
  let [k, n] = input[0].split(" ").map((num) => +num);
  let lengthList = [];
  for (let i = 1; i <= k; i++) {
    lengthList.push(+input[i]);
  }

  lengthList.sort((a, b) => a - b);

  let start = 1;
  let end = lengthList[lengthList.length - 1];
  let result = 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let cnt = 0;

    for (let length of lengthList) {
      cnt += Math.floor(length / mid);
    }

    if (cnt >= n) {
      start = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }

  console.log(result);
}
