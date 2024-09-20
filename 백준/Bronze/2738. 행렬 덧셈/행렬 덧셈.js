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
  let [N, M] = input[0].split(" ").map((num) => +num);

  for (let i = 1; i < N + 1; i++) {
    let countArr = new Array(M).fill(0);
    let nIndex = i;
    let mIndex = i + N;

    let nArr = input[nIndex].split(" ").map((num) => +num);
    let mArr = input[mIndex].split(" ").map((num) => +num);

    for (let k = 0; k < M; k++) {
      countArr[k] = nArr[k] + mArr[k];
    }
    console.log(countArr.join(" "));
  }
}
