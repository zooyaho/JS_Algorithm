const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim();
let num = +input;
let fibonachi = [0, 1];

for(let i = 2; i <= num; i++) {
  fibonachi.push(BigInt(fibonachi[i-2]) + BigInt(fibonachi[i-1]));
}
/* 
* - '2,880,067,194,370,816,000' 범위를 넘은 값을 나타낼 수 있는 객체가 필요하게 됩니다.
* - BigInt()를 사용하여 변형 시킨다.
*/
console.log(BigInt(fibonachi[num]).toString());