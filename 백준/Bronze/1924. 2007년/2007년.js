const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((el) => +el);

let month = input[0];
let date = input[1];

let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let totalDate = 0;

for(let i = 0; i < month - 1; i++){
  totalDate += monthList[i];
}
totalDate += date;

console.log(week[totalDate % 7]);