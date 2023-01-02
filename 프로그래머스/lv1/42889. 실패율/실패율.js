function solution(N, stages) {
    var answer = [];
    var temp = [];
    
    for(let i=1; i<=N; i++){
        var 실패 = 0;
        var 스테이지도달 = 0;
        for(let s of stages){
            if(s >= i){
                스테이지도달++;
                if(s === i) 실패++;
            }
        }
        temp.push([실패/스테이지도달, i]);
    }
    for(let i = 0; i < temp.length - 1; i++){
        for(let j = 0; j < temp.length - 1 - i; j++){
            var swap;
            if(temp[j][0] < temp[j+1][0]) {
                swap = temp[j]
                temp[j] = temp[j+1]
                temp[j+1] = swap;
            }
        }
    }
    for(let t of temp){
        answer.push(t[1]);
    }
    return answer;
}