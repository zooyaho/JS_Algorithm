function solution(n) {
    var answer = 0;
    var count = 0;
    
    for(let i = 2; i <= n; i++){
        let j = 2;
        while(j <= Math.sqrt(i)){
            if(i % j === 0) {
                count++;
                break;
            } 
            j++;
        }
        if(count === 0) answer++;
        count = 0;
    }
    return answer;
}