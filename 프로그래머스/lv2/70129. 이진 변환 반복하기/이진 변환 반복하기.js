function solution(s) {
    var answer = [0,0];
    var temp = s;
    
    function count(string) {
        var zero = 0;
        var one = 0;
        
        for(let str of string){
            if(str === '0') zero++;
            else one++;
        }
        answer[0]++;
        answer[1] += zero;
        return one.toString(2);
    }
    
    while(temp.length > 1){
        temp = count(temp);
    }
    
    return answer;
}