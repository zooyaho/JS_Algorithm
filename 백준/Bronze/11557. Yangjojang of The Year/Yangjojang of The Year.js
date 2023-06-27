const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let infoList = fs.readFileSync(filePath).toString().trim().split('\n').map(i => i.replace('\r', '').split(' '));
let schoolObj = {};

function findMaxAlcoholSchool(schoolList) {
  let maxSchoolName = ''
  let maxSchoolNum = 0;

  for(let school in schoolList) {
    if(+schoolList[school] > maxSchoolNum) {
      maxSchoolNum = +schoolList[school];
      maxSchoolName = school;
    } 
  }

  console.log(maxSchoolName);
}

for(let i = 0; i < infoList.length; i++) {
  if(infoList[i].length === 2) {
    schoolObj[infoList[i][0]] = infoList[i][1];
    
    if(i === (infoList.length - 1)) {
      findMaxAlcoholSchool(schoolObj);
    }
  } else {
    if(Object.keys(schoolObj).length) { 
      findMaxAlcoholSchool(schoolObj);
    }
    schoolObj = {};
  }
}
