function solution(citations) {
    var sortedArr = citations.sort((a,b)=> b-a);
    
    for(let i = 0; i < sortedArr.length; i++){
        // 피인용문의 값과 no이 같을 때 피인용문의 값이 h-index
        if(sortedArr[i] === i+1) return sortedArr[i]
        // 피인용문의 값이 no보다 작아질 때의 직전 no이 h-index
        else if(sortedArr[i] < i+1) return i;
    }
    return sortedArr.length;
}