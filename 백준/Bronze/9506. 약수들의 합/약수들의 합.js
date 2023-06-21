const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let numList = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
numList.pop();

for(let num of numList) {
  let measures = [];

  for(let i = 1; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      measures.push(i, num / i);
    }
  }

  measures.sort((a,b)=>a-b); // 오름차순 정렬
  measures.pop();

  let sum = measures.reduce((acc, cur)=> acc += cur, 0);

  if(num === sum) {
    let print = num + ' = ';

    for(let j = 0; j < measures.length; j++) {
      if(j === measures.length - 1) {
        print += measures[j];
      } else {
        print += measures[j] + ' + ';
      }
    }
    
    console.log(print);
  } else {
    console.log(num + ' is NOT perfect.');
  }
}