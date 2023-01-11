function solution(elements) {
    var count = elements.length;
    var long = elements.concat(...elements);
    var sumList = [];
    while(count > 0){
        for(let i = 0; i < elements.length; i++){
            var nums = long.slice(i,i+ count);
            var sum = 0;
            for(let num of nums){
               sum += num; 
            }
            sumList.push(sum);
        }
        count--;
    }
    return [...new Set(sumList)].sort((a,b)=>a-b).length;
}