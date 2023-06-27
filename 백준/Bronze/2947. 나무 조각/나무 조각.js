const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let numList = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

for(let i = 0; i < numList.length; i++) {
  for(let j = 0; j < numList.length - 1; j++) {
    let temp = [...numList];

    if(numList[j + 1] < numList[j]) {
      [numList[j], numList[j + 1]] = [numList[j + 1], numList[j]];
    }

    if(temp.join(' ') !== numList.join(' ')) {
      console.log(numList.join(' '));
    }
  }
}