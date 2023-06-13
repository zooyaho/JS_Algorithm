let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let scoreList = input[1].split(' ');
let maxScore = Math.max(...scoreList);
let sum = 0;

for(let score of scoreList) {
  sum += score/maxScore*100;
}
let avg = sum/scoreList.length;
console.log(avg);