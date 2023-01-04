function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 1; i <= number; i++){
        var count = 0;
        var sqrt = false;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0) {
                if(j === Math.sqrt(i)) sqrt = true;
                else count++;
            }
        }
        count *= 2;
        if(sqrt) count += 1;
        if(count > limit) answer += power;
        else answer += count;
    }
    
    return answer;
}