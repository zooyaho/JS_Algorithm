const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [start, end] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
let sum = 0;
let numList = [];
let count = 0;
let num = 1;

for(let i = 0; i < end; i++) {
  numList.push(num);
  count++;
  if(num === count) {
    num++;
    count = 0;
  }
}
sum = numList.slice(start - 1, end + 1).reduce((acc, cur) => acc += +cur, 0);
console.log(sum);