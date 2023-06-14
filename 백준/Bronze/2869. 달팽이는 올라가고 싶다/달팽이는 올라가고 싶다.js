const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let upLength = +input[0]; // 낮에 올라가는 높이
let downLength = +input[1]; // 밤에 내려가는 높이
let targetHeight = +input[2]; // 올라가야 할 높이

console.log(Math.ceil((targetHeight - downLength) / (upLength - downLength)));