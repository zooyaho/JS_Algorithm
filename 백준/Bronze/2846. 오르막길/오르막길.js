const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [_N, heightList] = fs.readFileSync(filePath).toString().trim().split('\n');
heightList = heightList.split(' ').map(Number);
let uphillRoadList = [heightList[0]]; // 오르막길 높이 목록
let largestAscent = 0; // 가장 큰 오르막

function find() {
  let uphillRoadHeight = uphillRoadList[uphillRoadList.length - 1] - uphillRoadList[0];  

  if(uphillRoadHeight > largestAscent) {
    largestAscent = uphillRoadHeight;
  }
}

for(let i = 1; i < heightList.length; i++) {
  if(uphillRoadList[uphillRoadList.length - 1] < heightList[i]) {
    // 높이가 증가하는 경우
    uphillRoadList.push(heightList[i]);
    
    if(i === heightList.length - 1) {
      // 마지막 index일 경우
      find();
    }
  } else {
    // 높이가 같거나 감소하는 경우
    find();
    uphillRoadList = [heightList[i]]; // 초기화
  }
}

console.log(largestAscent);