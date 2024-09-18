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
  let houseList = [];
  for (let i = 1; i <= k; i++) {
    houseList.push(+input[i]);
  }

  houseList.sort((a, b) => a - b);

  let start = 1;
  let end = houseList[houseList.length - 1];
  let result = 0;

  while (start <= end) {
    let lastInstalled = houseList[0];
    let mid = Math.floor((start + end) / 2);
    let cnt = 1;

    for (let i = 1; i < k; i++) {
      if (houseList[i] - lastInstalled >= mid) {
        cnt++;
        lastInstalled = houseList[i];
      }
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
