function solution(s) {
    var answer = '';
    var num = '';
    var temp = [];
    
    for(let str of s){
        if(str !== ' '){
            num += str;
        } else if(num){
            // 공백일 경우
            temp.push(+num);
            num = '';
        }
    }
    temp.push(+num);
    
    answer += Math.min(...temp)
    answer += ' '
    answer += Math.max(...temp)
        
    return answer;
}