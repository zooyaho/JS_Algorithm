const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(el => el.split(' ').map((i)=>+i));
input.shift();

const gcd = (a, b) => {
  // 최대 공약수
  return a % b === 0 ? b : gcd(b, a % b);
}
const lcm = (a, b) => {
  // 최소 공배수
  return a * b / gcd(a, b);
}

for(let list of input) {
  let a = list[0] >= list[1] ? list[0] : list[1];
  let b = list[0] >= list[1] ? list[1] : list[0];

  console.log(lcm(a, b));
}