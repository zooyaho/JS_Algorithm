const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

function sol(input) {
  const num1 = +input[0];
  const num2 = +input[1];
  if (num1 === num2) return "==";
  else if (num1 > num2) return ">";
  else if (num1 < num2) return "<";
}

console.log(sol(input));
