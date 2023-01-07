function solution(n, words) {
    var answer = [];
    var endStr = '';
    for(let i = 0; i < words.length; i++){
        if(i !== 0 && endStr !== words[i][0] || i !== words.indexOf(words[i])){
            answer = [i % n + 1, Math.ceil((i+1) / n)];
            break;
        }
        endStr = words[i].at(-1); 
    }
    
    return answer.length === 0 ? [0,0] : answer;
}