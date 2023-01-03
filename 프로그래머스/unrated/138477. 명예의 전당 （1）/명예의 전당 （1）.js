function solution(k, score) {
    var answer = [];
    var temp = [];
    
    for(let i=0; i < score.length; i++){
        if(temp.length < k) {
            temp.push(score[i]);
        } else if(Math.min(...temp) < score[i]){
            temp.pop();
            temp.push(score[i]);
        }
        temp.sort((a,b)=>b-a);
        answer.push(temp.at(-1));
    }
    
    return answer;
}