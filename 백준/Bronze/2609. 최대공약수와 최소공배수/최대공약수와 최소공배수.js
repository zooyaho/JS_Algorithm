const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(el => +el);

let num1 = undefined;
let num2 = undefined;

if(input[0] > input[1]) {
  num1 = input[0];
  num2 = input[1];
} else {
  num1 = input[1];
  num2 = input[0];
}

//  gcd(최대공약수), lcm(최소공배수)
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a,b) => a * b / gcd(a, b);

console.log(gcd(num1, num2));
console.log(lcm(num1, num2));