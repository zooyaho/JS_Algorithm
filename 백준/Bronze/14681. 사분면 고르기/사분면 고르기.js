const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // input = input.map((item) => +item);
  solution(...input);

  process.exit();
});

// 풀이코드
function solution(x, y) {
  let a = +x;
  let b = +y;

  if (a > 0 && b > 0) console.log(1);
  else if (a < 0 && b > 0) console.log(2);
  else if (a < 0 && b < 0) console.log(3);
  else if (a > 0 && b < 0) console.log(4);
}
