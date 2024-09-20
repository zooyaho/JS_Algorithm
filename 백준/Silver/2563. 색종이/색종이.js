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
  let N = +input[0]; // 색종이 수
  let paperMatrix = Array.from(Array(100), () => Array(100).fill(0)); // 100 * 100
  let cnt = 0;

  for (let i = 1; i < N + 1; i++) {
    const numbers = input[i].split(" ").map((num) => +num);
    let [xStart, xEnd] = [numbers[0], numbers[0] + 10];
    let [yStart, yEnd] = [numbers[1], numbers[1] + 10];

    for (let x = xStart; x < xEnd; x++) {
      for (let y = yStart; y < yEnd; y++) {
        paperMatrix[x][y] = 1;
      }
    }
  }
  for (let x = 0; x < 100; x++) {
    for (let y = 0; y < 100; y++) {
      if (paperMatrix[x][y] === 1) ++cnt;
    }
  }
  console.log(cnt);
}
