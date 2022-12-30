function solution(dartResult) {
    var answer = [];
    var temp = dartResult.slice().split('');
    var num = '';
    var index = 0;
    
    temp.forEach((s, i) => {
        if(!Number.isNaN(+s)){
            // 숫자일 경우
            if(temp[i-1] === "S" || 
               temp[i-1] === "T" || 
               temp[i-1] === "D" || 
               temp[i-1] === "*"|| 
               temp[i-1] === "#"){
                num = '';
            }
            num += s;
        } else {
            // 문자일 경우
            if(s === "S"){
                answer.push(+num);
                index++;
            } else if(s === "D"){
                answer.push(Math.pow(+num, 2));
                num = Math.pow(+num, 2);
                index++;
            } else if(s === "T"){
                answer.push(Math.pow(+num, 3));
                num = Math.pow(+num, 3)
                index++;
            }
            
           if(s === '*') {
               answer[index-1] = num * 2;
               num *= 2;
               if(index-1 > 0){
                   answer[index-2] = answer[index-2] * 2;
               }
           } else if(s === '#') {
               num *= -1;
               answer[index-1] = num;
           }     
        }
       
    });
    return answer.reduce((prev, cur) => prev + cur ,0);
}