function solution(n) {
    var answer = 0;
    var num = 1;
    while(n > 0){
        if(n % num ===  0) answer++;
        n -= num;
        num++;
    }
    return answer;
}