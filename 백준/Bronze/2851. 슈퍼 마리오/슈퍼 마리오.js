const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let numList = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let sum = 0;

for(let i = 0; i < numList.length; i++){
  sum += numList[i];
  let temp = sum + numList[i + 1];
  
  if(i == numList.length - 2 || temp > 100) {
    if((100 - sum) >= (temp - 100)) console.log(temp);
    else console.log(sum);
    break;
  }
}