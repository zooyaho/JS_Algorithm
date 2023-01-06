function solution(s){
    var stack = [];
    
    for(let str of s){
        if(stack.length > 0 && stack.at(-1) === str){
            stack.pop();
        } else {
            stack.push(str);
        }
    }

    return stack.length === 0 ? 1 : 0;
}