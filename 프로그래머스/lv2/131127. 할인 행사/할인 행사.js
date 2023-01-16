function solution(want, number, discount) {
    var answer = 0;
    var wantObj = want.reduce((prev, cur, i)=>{
        prev[cur] = number[i];
        return prev;
    }, {});
    
    for(let i = 0; i < discount.length; i++){
        var list = discount.slice(i, 10 + i);
        var tempObj = Object.assign({}, wantObj);
        
        list.forEach((item, idx)=>{
            if(tempObj[item]){
                tempObj[item] = tempObj[item] - 1;
            }
            var flag = true
            for(let c of Object.values(tempObj)){
                if(c > 0){
                    flag = false;                
                    break;
                }
            }
            if(flag) answer++;
        });    
    }
    return answer;
}