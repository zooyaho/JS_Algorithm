const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [num, b] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log(num.toString(b).toUpperCase());