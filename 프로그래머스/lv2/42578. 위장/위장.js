function solution(clothes) {
    // 공식 (a+1) * (b+1) * (c+1) -1
    var answer = 1;
    var clothesObj = clothes.reduce((prev, cur)=>{
        prev[cur[1]] = (prev[cur[1]] | 0) + 1;
        return prev
    }, {});
    for(let c in clothesObj){
        answer *= clothesObj[c] + 1
    }
    return answer - 1;
}