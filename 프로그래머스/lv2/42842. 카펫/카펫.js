function solution(brown, yellow) {
    var answer = [];
    for(let i = Math.floor(brown / 2) - 1; i > 0; i--){
        for(let j = 1; j <= Math.floor(brown / 2); j++){
            if(i * j === brown+yellow && (i-2)*(j-2)===yellow){
                return [i, j];
            }
        }
    }
    return answer;
}