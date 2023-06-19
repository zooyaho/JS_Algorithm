const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((i)=>i.replace('\r', ''));

for(let str of input) {
  if(str[0] !== '0') {
    let idx = str.length % 2 === 0 ? str.length / 2 : Math.floor(str.length / 2); 
    let arr1 = str.slice(0, idx);
    let arr2 = str.slice(str.length % 2 === 0 ? idx : idx + 1);

    solution(arr1, arr2);
  }
}

function solution(arr1, arr2) {
  arr2 = arr2.split('').reverse().join('');
  if(arr1 === arr2) {
    console.log("yes");
  } else if(arr1 !== ' '){
    console.log('no');
  }
}