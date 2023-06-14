const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((el) => +el);

// 난쟁이 7명 키 합이 100
// 거짓 난쟁이 2명 + 100
let totalHeight = input.reduce((acc, cur)=>acc += cur, 0);
let realTargetList = [];

for(let i = 0; i < input.length; i++) {
  for(let j = i + 1; j < input.length; j++) {
    if((input[i] + input[j] + 100) === totalHeight) {
      realTargetList = input.filter((_h, idx)=> idx !== i && idx !== j);
      break;
    }
  }
  if(realTargetList.length > 0) break;
}

realTargetList.sort((a,b) => a-b);

for(let h of realTargetList){
  console.log(h);
}