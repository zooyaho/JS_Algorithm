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
  let queList = [];
  let pointerIdx = 0;
  let results = [];

  for (let i = 1; i < input.length; i++) {
    const command = input[i].split(" ");

    switch (command[0]) {
      case "push": {
        queList.push(command[1]);
        break;
      }
      case "pop": {
        if (queList.length > pointerIdx) {
          results.push(queList[pointerIdx]);
          pointerIdx++;
        } else results.push(-1);
        break;
      }
      case "size": {
        results.push(queList.length - pointerIdx);
        break;
      }
      case "empty": {
        results.push(queList.length > pointerIdx ? 0 : 1);
        break;
      }
      case "front": {
        if (queList.length > pointerIdx) results.push(queList[pointerIdx]);
        else results.push(-1);
        break;
      }
      case "back": {
        if (queList.length > pointerIdx)
          results.push(queList[queList.length - 1]);
        else results.push(-1);
        break;
      }
    }
  }

  console.log(results.join("\n"));
}
