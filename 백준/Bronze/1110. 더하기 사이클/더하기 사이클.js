let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let num = +input;
let compareNum = num + '';
let count = 0;

while(true){
  if(compareNum.length === 1) {
    // 한자리일때
    compareNum = '0' + compareNum;
  }
  let first = +compareNum[0]; 
  let second = +compareNum[1];
  let sum = first + second + '';
  
  if(sum.length > 1) {
    compareNum = '' + second + sum[1];
  } else {
    compareNum = '' + second + sum;
  }

  count++;

  if(+compareNum === num) {
    console.log(count);
    break;
  }
}