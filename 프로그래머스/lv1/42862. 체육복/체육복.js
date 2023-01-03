function solution(n, lost, reserve) {
    var answer = 0;
    var temp = Array.from({length: n+2}).fill(0);
    
    for(let l of lost.slice().sort((a,b)=>a-b)){
        temp[l] -= 1;
    }
    var reserveSorting = reserve.slice().sort((a,b)=>a-b)
    for(let r of reserveSorting){
        if(temp[r] === -1){
            temp[r] += 1;
            reserveSorting = reserveSorting.filter((n)=> n !== r)
        }
    }
    for(let r of reserveSorting){
        if(temp[r-1] === -1){
            temp[r-1] += 1;
        } else if(temp[r+1] === -1) {
            temp[r+1] += 1;
        }
    }
    for(let i = 1; i <= n; i++){
        if(temp[i] >= 0) answer++
    }
    return answer;
}