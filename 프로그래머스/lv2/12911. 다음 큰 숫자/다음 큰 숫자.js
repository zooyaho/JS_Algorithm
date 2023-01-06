function solution(n) {
    var answer = 0;
    var nOneCount = 0;
    var bigOneCount = 0;
    
    for(let s of n.toString(2)){
        if(s === '1') nOneCount++; 
    }
    let i = n+1;
    while(nOneCount !== bigOneCount){
        bigOneCount = 0;
        for(let s of i.toString(2)){
            if(s === '1') bigOneCount++; 
        }
        if(nOneCount === bigOneCount) {
            answer = i;
            break;
        }
        i++;
    }
    return answer;
}