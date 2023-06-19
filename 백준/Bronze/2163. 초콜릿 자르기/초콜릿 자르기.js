const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
let [n, m] = input;

console.log(n*m -1);