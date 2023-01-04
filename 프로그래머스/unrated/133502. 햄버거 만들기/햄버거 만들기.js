function solution(ingredient) {
    var answer = 0;
    var stack = [];
    
    for(let i of ingredient){
        stack.push(i);
        if(stack.slice(-4).join('') === '1231') {
            answer++;
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
        }
    }
    
    return answer;
}