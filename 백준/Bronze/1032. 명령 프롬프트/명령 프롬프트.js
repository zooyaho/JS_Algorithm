const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [n, ...files] = fs.readFileSync(filePath).toString().trim().split('\n').map(i=>i.replace('\r',''));
let printRegexp = '';

for(let i = 0; i < files[0].length; i++) {
  let compareWord = files[0][i];
  let flag = true;
  
  for(let file of files) {
    if(file[i] !== compareWord) {
      flag = false;
      break;
    }
  }
  printRegexp += flag ? compareWord : '?';
}
console.log(printRegexp);