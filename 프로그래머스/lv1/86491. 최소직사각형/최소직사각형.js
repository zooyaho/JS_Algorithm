function solution(sizes) {
    var temp = sizes.map((v) => v.sort((a,b) => b - a));
    var maxH = 0;
    var maxW = 0;
    
    for(let m of temp){
        if(m[0] > maxW) maxW = m[0];
        if(m[1] > maxH) maxH = m[1];
    }
    
    return maxH * maxW;
}