function solution(s) {
    var answer = [];
    
    for(let i = 0; i< s.length; i++){
        var temp = s.split('').reverse().slice(s.length - i);
        if(s.indexOf(s[i]) === i) answer.push(-1);
        else answer.push(temp.indexOf(s[i])+1);
    }
    return answer;
}