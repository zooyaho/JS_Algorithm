function solution(s) {
    var bracketList = ['()', '{}', '[]'];
    var bracketObj = {'(':')', '{':'}', '[':']'};
    var bracket = [];
    var max = 0;
    
    for(let i = 0; i < s.length; i++){
        bracket = s.slice(i)
        bracket += s.slice(0,i);
        var stack = '';
        var count = 0;
        
        for(let b of bracket){
            stack += b
            if(!bracketObj[b]){
                if(stack.includes(bracketList[0])) {
                    stack = stack.replace(bracketList[0], '');
                }
                else if(stack.includes(bracketList[1])) {
                    stack = stack.replace(bracketList[1], '');
                }
                else if(stack.includes(bracketList[2])) {
                    stack = stack.replace(bracketList[2], '');
                }
                if(stack.length === 0) count++;
            }
        }
        if(stack.length > 0) count = 0;
        if(count > max) max = count;
    }
    
    return max;
}