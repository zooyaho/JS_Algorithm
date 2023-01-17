function solution(new_id) {
    var answer = '';
    for(let str of new_id){
        if(/[a-zA-Z]/.test(str)) answer += str.toLowerCase();
        else if(/[\d-_.]/.test(str)) answer += str;
    }
    
    // 마침표 관련 로직
    while(/\.{2}/.test(answer)){
        answer = answer.replaceAll('..', '.');
    }
    if(/\./.test(answer[0])) answer = answer.slice(1);
    if(/\./.test(answer.at(-1))) answer = answer.slice(0, answer.length-1);
    
    // 문자 길이 관련 로직
    if(answer.length === 0) answer = "a"
    if(answer.length >= 16) {
        answer = answer.slice(0, 15);
        if(answer.at(-1) === '.') answer = answer.slice(0, 14);
    } else if(answer.length <= 2){
        var end = answer.at(-1);
        var num = 3 - answer.length;
        while(num > 0){
            answer += end;
            num--;
        }
    }
    return answer;
}