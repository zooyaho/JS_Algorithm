const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(el => el.split(' ').map((i)=>+i));

let list = input[1].sort((a,b)=>a-b);
console.log(list[0] * list[list.length - 1]);