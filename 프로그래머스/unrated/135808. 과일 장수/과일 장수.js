function solution(k, m, score) {
    var answer = 0;
    var sortedScore = score.sort((a,b)=>b-a);
    var temp = [];
    
    for(let i = 0; i < Math.floor(sortedScore.length / m); i++){
        temp.push(sortedScore.slice(i*m, i*m+m));
    }
    if(temp.length === 0) return 0;
    else {
        for(let s of temp){
            answer += s.at(-1) * m
        }
    }
    return answer;
}