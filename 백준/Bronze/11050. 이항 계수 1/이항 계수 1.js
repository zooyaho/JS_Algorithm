const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
let [n, k] = [...input];

/*
* 이항계수: 이항식을 이항 정리로 전개했을 때 각 항의 계수이며, 주어진 크기의 (순서 없는) 조합의 가짓수이다.
* 공식:
* (N, K)
*     N!
* ㅡㅡㅡㅡㅡㅡ
* (N-K)! x K!
*/

function factorial(num) {
  let result = 1;
  for(let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

// n과 k가 같을 경우 1
let answer = n === k ? 1 : factorial(n) / (factorial(n-k) * factorial(k));
console.log(answer);