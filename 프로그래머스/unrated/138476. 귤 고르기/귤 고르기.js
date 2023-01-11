function solution(k, tangerine) {
    var answer = 0;
    // 중복되는 개수가 많은 것부터 count를 해야함
    var obj = tangerine.reduce((prev, cur)=> {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    },{});
    var values = Object.values(obj).sort((a,b)=>b - a);
    for(let v of values){
        if(k > 0) k -= v;
        else break;
        answer++;
    }
    return answer;
}