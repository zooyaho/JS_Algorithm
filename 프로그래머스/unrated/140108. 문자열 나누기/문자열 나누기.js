function solution(s) {
    var answer = 0;
    var same = 0;
    var other = 0;
    var x;
    var temp = '';
    
    s.split('').forEach((word, i)=>{
        if(other === 0 && same === 0) x = word;
        
        if(x !== word) {
            other++;
            temp += word;
        } else {
            same++;
            temp += word;
        }
        
        if(other === same){
            temp = '';
            answer++;
            other = 0;
            same = 0;
        }
    })
    if(temp.length > 0) {
        answer++;
    }
    
    return answer;
}