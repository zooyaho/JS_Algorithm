function solution(n, arr1, arr2) {
    var answer = [];
    var temp = [];
    
    for(let i = 0; i < arr1.length; i++){
        var 몫1 = arr1[i];
        var 몫2 = arr2[i];
        
        while(몫1 > 0 || 몫2 > 0) {
            if((몫1 % 2) + (몫2 % 2) > 0) temp.push('#');
            else temp.push(' ');
            
            몫1 = Math.floor(몫1 / 2);
            몫2 = Math.floor(몫2 / 2);
        }
        for(let s = temp.length; s < arr1.length; s++){
            temp.push(' ');
        }
        answer.push(temp.reverse().join(''));
        temp = [];
    }
    
    return answer;
}