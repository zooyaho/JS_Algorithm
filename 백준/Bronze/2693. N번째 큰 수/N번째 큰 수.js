const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let caseList = fs.readFileSync(filePath).toString().trim().split('\n');
caseList.shift();

for(let item of caseList) {
  item = item.split(' ').map(Number).sort((a, b)=> b - a);
  console.log(item[2]);
}
