function solution(s) {
    var answer = s;
    var alphabet = ['zero','one', 'two', 'three','four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    alphabet.forEach((a, i)=>{
        answer = answer.replaceAll(a,i);
    })
    return +answer;
}