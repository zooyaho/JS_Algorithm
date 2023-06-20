const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let sentence = fs.readFileSync(filePath).toString();
let regExp = /[a-zA-Z]/;
let print = '';
/*
* ASCII 대문자 65-90, 소문자 97-122
*/
function changeToROT13(num, min, max) {
  let rot13 = num + 13;

  if(rot13 > max) {
    rot13 = (rot13 - max) + min - 1;
  }
  return String.fromCharCode(rot13);
}

for(let i = 0; i < sentence.length; i++) {
  if(regExp.test(sentence[i])) {
    // 대소문자일 경우
    let asciiNum = sentence.charCodeAt(i);
    
    if(asciiNum >= 65 && asciiNum <= 90) {
      // 대문자일 경우
      print += changeToROT13(asciiNum, 65, 90);
    } else if(asciiNum >= 97 && asciiNum <= 122) {
      // 소문자일 경우
      print += changeToROT13(asciiNum, 97, 122);
    }
  } else {
    print += sentence[i];
  }
}
console.log(print);