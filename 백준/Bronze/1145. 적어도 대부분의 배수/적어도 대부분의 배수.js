const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let numList = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const getGcd = (a, b) => a % b === 0 ? b : getGcd(b, a % b); // 최대공약수
const getLcm = (a,b) => {
  // 최소공배수
  let max = a > b ? a : b;
  let min = a > b ? b : a;

  return max * min / getGcd(max, min);
} 
let threeNumList = [];
let lcmList = [];

// threeNumList 구성
for(let i = 0; i < numList.length - 2; i++) {
  for(let j = i + 1; j < numList.length - 1; j++) {
    for(let k = j + 1; k < numList.length; k++) {
      threeNumList.push([numList[i], numList[j], numList[k]]);
    }
  }
}

// 세 수의 최소공배수 구하기
for(let numList of threeNumList) {
  let [num1, num2, num3] = numList;
  let twoNumLcm = getLcm(num1, num2);

  lcmList.push(getLcm(twoNumLcm, num3));
}

console.log(Math.min(...lcmList));