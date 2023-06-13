let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let limitNum = (input.length / 2) / 1 === 0 ? input.length / 2 : Math.floor(input.length / 2);
let flag = true; // 팰린드롬

for(let i = 0; i < limitNum; i++){
  if(input[i] !== input[input.length - i - 1]) flag = false;
}
console.log(flag ? 1 : 0);