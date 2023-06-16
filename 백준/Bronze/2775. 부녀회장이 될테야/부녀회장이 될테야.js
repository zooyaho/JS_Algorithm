const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(el => +el.replace('\r', ''));
input.shift();
let info = {};

for(let u = 0; u < input.length; u += 2){
  let [k, i] = input.slice(u, u + 2); // k층 i호

  for(let n = 0; n <= k; n++) { // n층
    for(let j = 1; j <= i; j++) { // j호
      if(n === 0) {
        info['' + 0 + j] = j; // 0층일 때 호수에 따른 거주
      } else if(j === 1) {
        info['' + n + j] = 1; // 1호는 층과 상관없이 1명 거주
      } else {
        info['' + n + j] = info['' + (n - 1) + j] + info['' + n + (j - 1)];
      }
    }
  }
  console.log(info['' + k + i]);
}