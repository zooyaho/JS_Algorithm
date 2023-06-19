const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(i=>i.replace('\r',''));
let maxLength = 0;
let print = '';

for(let str of input) {
  if(str.length > maxLength) maxLength = str.length;
}
for(let i = 0; i < maxLength; i++) {
  for(let j = 0; j < 5; j++) {
    let word = input[j][i];
    if(word) print += word;
  }
}
console.log(print)