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
  let timeList = [];
  for (let i = 1; i <= N; i++) {
    const times = input[i].split(" ").map((time) => +time);
    timeList.push(times);
  }

  // 회의 끝나는 시간 기준으로 오름차순 정렬
  timeList.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let cnt = 0;
  let prevEnd = 0;

  for (let i = 0; i < N; i++) {
    const [curStart, curEnd] = timeList[i];
    if (curStart >= prevEnd) {
      ++cnt;
      prevEnd = curEnd;
    }
  }

  console.log(cnt);
}
