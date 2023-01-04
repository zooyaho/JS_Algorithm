function solution(X, Y) {
    var temp = [];
    var xObj = X.split('').reduce((prev, cur)=>{
        prev[cur] = (prev[cur] | 0) + 1;
        return prev
    },{})
    var yObj = Y.split('').reduce((prev, cur)=>{
        prev[cur] = (prev[cur] | 0) + 1;
        return prev
    },{})
    
    for(let x in xObj){
        if(Y.includes(x)){
            var min = xObj[x] >= yObj[x] ? yObj[x] : xObj[x];
            for(let i = 0; i < min; i++){
                temp.push(x);
            }
        }
    }
    if(temp.length > 0){
        var num = temp.sort((a,b)=>b-a).join('');
        if(+num === 0) return "0";
        else return num;
    } else {
        return "-1";
    }
}