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
  let [N, K] = input[0].split(" ").map((num) => +num);
  let numList = [];
  for (let i = N; i > 0; i--) {
    numList.push(+input[i]);
  }

  let cnt = 0;
  let result = K;

  for (let num of numList) {
    let remain = result % num; // 나머지
    let quo = Math.floor(result / num); // 몫

    cnt += quo;
    result = remain;
  }

  console.log(cnt);
}
