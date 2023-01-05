function solution(s) {
    var answer = '';
    var flag = true;
    
    for(let str of s){
        if(/[a-zA-Z]/.test(str)) {
            // 첫문자가 공백, 숫자, 문자
            if(flag){
                // 첫문자인 경우
                answer += str.toUpperCase();
                flag = false
            } else {
                answer += str.toLowerCase();
            }
        } else {
            // 문자가 공백, 숫자
            if(str === ' ') flag = true;
            if(/[0-9]/.test(str)) flag = false;
            answer += str;
        }
    }
    return answer;
}