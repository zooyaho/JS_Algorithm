const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [_num, ...sentences] = fs.readFileSync(filePath).toString().trim().split('\n').map(i=>i.replace('\r', ''));

for(let sentence of sentences) {
  sentence = sentence.split(' ');
  let newSentence = ''
  
  for(let i = 0; i < sentence.length; i++) {

    if(sentence[i].length === 1) {
      newSentence += sentence[i];
    } else {
      newSentence += sentence[i].split('').reverse().join('');
    }
    
    if(i !== sentence.length - 1) {
      newSentence += ' ';
    }
  }
  console.log(newSentence);
}