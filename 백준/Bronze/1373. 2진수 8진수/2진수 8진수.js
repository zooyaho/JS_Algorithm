const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let inputs = fs.readFileSync(filePath).toString().trim();
// 10진수를 다른 진수로 변환하기 위해서는 toString()을,
// 다른 진수를 10진수로 변환하기 위해서는 parseInt()를 사용한다.
// 2진수의 길이가 1,000,000을 넘지 않는다.라는 조건을 보면,
// 10진수로 변경하면 매우 큰 수가 나오기 때문에 작게 나누어 계산해야한다.
// 2진수를 3자리씩 잘라서 붙이면 8진수가 나온다.
let print = '';

while(inputs.length >= 3){
  print = parseInt(inputs.slice(inputs.length - 3),2).toString(8) + print;
  inputs = inputs.slice(0, inputs.length - 3);
}
console.log(inputs ? print = parseInt(inputs, 2).toString(8) + print : print);