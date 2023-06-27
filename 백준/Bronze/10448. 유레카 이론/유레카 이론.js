const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [_N, ...list] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let tripletsList = [null];
let flag = false;

for(let i = 1; i < 45; i++) {
  tripletsList[i] = i * (i + 1) / 2;
}

for(let num of list) {
  for(let i = 1; i < 45; i++) {
    for(let j = 1; j < 45; j++) {
      for(let k = 1; k < 45; k++) {
        if(tripletsList[i] + tripletsList[j] + tripletsList[k] === num) {
          flag = true;
        }
      }
    }
  }
  if(flag) console.log(1);
  else console.log(0);
  flag = false;
}