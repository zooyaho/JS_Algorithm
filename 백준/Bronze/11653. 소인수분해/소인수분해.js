const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = +fs.readFileSync(filePath).toString().trim();

let result = [];
for (let i = 2; i <= input; i++) {
  while (input % i === 0) {
    input = input / i;
    result.push(i);
  }
}

result.forEach((n)=>console.log(n));