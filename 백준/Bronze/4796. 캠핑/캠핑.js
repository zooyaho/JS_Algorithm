const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let lists = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.replace('\r', ''));
lists.pop();
let count = 1;

for(let list of lists) {
  let [L, P, V] = list.split(' ').map(Number); // 캠핑장을 연속하는 P일 중, L일동안만 사용, V일 휴가
  let sum = Math.floor(V / P) * L;
  let remainder = V % P;

  if(remainder >= L) {
    sum += L;
  } else {
    sum += remainder;
  }

  console.log('Case ' + count + ': ' + sum);
  count++;
}