const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for(let i = 1; i < input.length; i++){
  let scoreList = input[i].split(' '); // 케이스의 전체 학생 점수
  let totalNum = +scoreList[0]; // 케이스의 전체 학생 수
  scoreList[scoreList.length - 1] = scoreList[scoreList.length - 1].replace('\r', ''); // '\r'문자 없애기
  let sum = 0;

  for(let j = 1; j < scoreList.length; j++) {
    sum += +scoreList[j];
  }
  let avg = sum / totalNum; // 평균
  let count = 0; // 평균을 넘는 학생의 수
  // 카운트(평균을 넘는 수) / 학생의 수) * 100
  for(let j = 1; j < scoreList.length; j++) {
    if(+scoreList[j] > avg) count++;
  }

  let percent = (count / totalNum * 100).toFixed(3) + '%';
  // 출력
  console.log(percent);
}