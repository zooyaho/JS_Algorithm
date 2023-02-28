const input = require("fs").readFileSync("/dev/stdin").toString();
function sol(input) {
  const year = +input;
  if (year % 4 === 0) {
    if (year % 400 === 0) return 1;
    if (year % 100 !== 0) return 1;
    else return 0;
  } else return 0;
}

console.log(sol(input));