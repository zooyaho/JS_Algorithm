let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let maxInfo = {num: 0, alpha: ''};
let flag = false;
let regExp = /[a-zA-Z]/g;

let countObj = input.reduce((acc, cur) => {
  if(cur.match(regExp) && cur.match(regExp).length === 1) {
    cur = cur.toUpperCase();
    acc[cur] = (acc[cur] || 0) + 1;
  }
  return acc;
}, {});

for(let word in countObj){
  if(countObj[word] > maxInfo.num) {
    maxInfo.num = countObj[word];
    maxInfo.alpha = word;
    flag = false;
  } else if(countObj[word] === maxInfo.num) flag = true;
}

console.log(flag ? '?' : maxInfo.alpha);