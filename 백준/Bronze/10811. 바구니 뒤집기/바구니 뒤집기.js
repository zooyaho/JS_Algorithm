let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0].split(' ')[0];
input.shift();
let basket = new Array(n).fill(0).map((_item, idx)=> ++idx);

for(let ipt of input) {
  let [i, j] =  ipt.split(' ');

  if(i === j) continue;
  let temp = basket.slice(i-1, j).reverse();
  basket.splice(i-1, j-i+1, ...temp);
}
console.log(basket.join(' '));