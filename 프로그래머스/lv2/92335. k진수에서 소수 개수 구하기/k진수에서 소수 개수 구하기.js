function solution(n, k) {
    var answer = 0;
    var noneZeroList = n.toString(k).split("0");
    for(let num of noneZeroList){
        if(!num || num === '1') continue;
        else {
            var flag = true;
            for(let i = 2; i <= Math.sqrt(+num); i++){
                if(+num % i === 0) flag = false;
            }
            if(flag) answer++;
        }
    }
   
    return answer;
}