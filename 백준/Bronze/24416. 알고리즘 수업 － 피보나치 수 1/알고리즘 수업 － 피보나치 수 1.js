const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let num = +fs.readFileSync(filePath).toString().trim();
let fibArr = [];

function fib(n) {
  if(n === 1 || n === 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
function fibonacci(n) {
  fibArr[0] = 1;
  fibArr[1] = 1;
  for(let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr[n - 1];
}

console.log(fibonacci(num) + ' ' + (num - 2));