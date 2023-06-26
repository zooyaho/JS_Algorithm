const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [num1, num2] = fs.readFileSync(filePath).toString().split(' ').map(item => +item.split('').reverse().join(''));

console.log(+(num1 + num2 + '').split('').reverse().join(''));