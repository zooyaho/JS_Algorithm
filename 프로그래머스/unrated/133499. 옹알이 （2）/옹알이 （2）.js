function solution(babbling) {
    var answer = 0;
    var ungali = ["aya", "ye", "woo", "ma"];
    
    for(let word of babbling){
        var stack = '';
        var before = '';
        var flag = true;
        for(let s of word){
            stack += s;
            if(ungali.includes(stack)){
                if(before === stack) {flag = false;console.log('중복')}
                before = stack;
                stack = stack.replace(stack, '');
                
            }
        }
        if(stack === '' && flag){
            answer++;
            before = '';
        }
    }
    return answer;
}