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
  for (let strings of input) {
    let stack = [];
    if (strings.length === 1) continue;

    for (let string of strings) {
      switch (string) {
        case "(":
        case ")":
        case "[":
        case "]":
          stack.push(string);
          break;
      }
    }

    stack = stack.join("");

    while (true) {
      if (stack.includes("()")) stack = stack.replace("()", "");
      else if (stack.includes("[]")) stack = stack.replace("[]", "");
      else break;
    }

    console.log(stack.length > 0 ? "no" : "yes");
  }
}
