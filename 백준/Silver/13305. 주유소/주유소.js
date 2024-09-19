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
  let lengthList = input[1].split(" ").map((num) => +num);
  let chargeList = input[2].split(" ").map((num) => +num);
  let sliceList = chargeList.slice(1, chargeList.length - 1);
  sliceList.sort((a, b) => a - b);

  let cnt = 0;
  for (let k = 0; k < N - 1; k++) {
    cnt += lengthList[k];
  }

  let result = 0;
  for (let i = 0; i < N - 1; i++) {
    if (sliceList[0] == chargeList[i]) {
      result += chargeList[i] * cnt;
      break;
    } else {
      result += chargeList[i] * lengthList[i];
      cnt -= lengthList[i];
    }
  }

  console.log(result);
}
