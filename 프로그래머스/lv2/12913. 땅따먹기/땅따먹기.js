function solution(land) {
    for(let i = 1; i < land.length; i++){
        var maxNum = Math.max(...land[i-1]);
        var secMaxNum = land[i-1].slice().sort((a,b)=>b-a)[1];
        var temp = [];
        
        for(let j = 0; j < land[i].length; j++){
            if(land[i-1][j] === maxNum) temp.push(land[i][j] + secMaxNum);
            else temp.push(land[i][j] + maxNum);
        }
        land[i] = temp;
    }
    return Math.max(...land[land.length - 1]);
}