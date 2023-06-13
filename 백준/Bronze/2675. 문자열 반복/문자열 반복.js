let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

for(let arr of input){
  let [repeatNum, originStr] = arr.trim().split(' ');
  let printStr = '';
  
  for(let i = 0; i < originStr.length; i++){
    let repeatWord = originStr[i];
    for(let j = 0; j < repeatNum; j++){
      printStr += repeatWord;
    }
  }
  console.log(printStr)
}