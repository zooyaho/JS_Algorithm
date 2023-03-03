const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
function sol(input) {
  let hour = +input[0];
  let minute = +input[1];
  minute -= 45;
  if (minute < 0) {
    minute += 60;
    hour -= 1;
    if (hour === -1) hour = 23;
  }
  return hour + " " + minute;
}

console.log(sol(input));