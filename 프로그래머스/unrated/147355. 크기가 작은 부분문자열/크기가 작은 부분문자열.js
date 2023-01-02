function solution(t, p) {
    var answer = 0;
    var temp = [];
    
    for(let i = 0; i<t.length-p.length+1; i++){
        temp.push(t.slice(i, i + p.length));
    }
    for(let num of temp){
        if(+num <= +p) answer++;
    }
    
    return answer;
}