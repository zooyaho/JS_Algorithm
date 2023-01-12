function solution(msg) {
    var answer = [];
    var dictionary = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var stack = [];
    var i = 0;
    
    while(i < msg.length){
        stack.push(msg[i]);
        for(let j = i+1; j < msg.length; j++){
            stack.push(msg[j]);
            var idx = dictionary.indexOf(stack.join(''));
            if(idx === -1){
                dictionary.push(stack.join(''));
                stack.pop();
                break;
            }
        }
        answer.push(dictionary.indexOf(stack.join(''))+1);
        i += stack.length;
        stack = [];
    }
    
    return answer;
}