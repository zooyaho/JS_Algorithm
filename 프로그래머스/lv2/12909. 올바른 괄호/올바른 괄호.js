function solution(s){
    var total = 0;
    
    for(let str of s){
        if(str === "(") total++;
        else if(str === ")"){
            total--;
            if(total < 0) return false;
        }
    }
    return total === 0 ? true : false
}