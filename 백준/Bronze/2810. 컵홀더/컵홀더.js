const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, seatList] = fs.readFileSync(filePath).toString().trim().split('\n');
let peopleCount = seatList.length;
seatList = seatList.replace(/LL/g, 'C');
let holderCount = seatList.length + 1;

if(peopleCount > holderCount) console.log(holderCount);
else console.log(peopleCount);