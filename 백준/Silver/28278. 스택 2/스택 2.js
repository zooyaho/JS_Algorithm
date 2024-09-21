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
  let stack = [];
  let result = [];

  for (let i = 1; i <= N; i++) {
    const nums = input[i].split(" ").map((num) => +num);
    if (nums[0] === 1) {
      stack.push(nums[1]);
    } else if (nums[0] === 2) {
      if (stack.length) {
        result.push(stack.pop());
      } else {
        result.push(-1);
      }
    } else if (nums[0] === 3) {
      result.push(stack.length);
    } else if (nums[0] === 4) {
      result.push(stack.length ? 0 : 1);
    } else if (nums[0] === 5) {
      if (stack.length) {
        result.push(stack[stack.length - 1]);
      } else {
        result.push(-1);
      }
    }
  }

  console.log(result.join("\n"));
}
