function solution(numbers, target) {
    var answer = 0;
    var sum = numbers.reduce((prev,cur) => prev += cur, 0);
    var 잉여값 = (sum - target) / 2; // 찾아야하는 수의 합
    
    const search = (value, idx, count) => {
        for(let i = idx; i < numbers.length; i++){
            var temp = value;
            temp -= numbers[i];
            if(temp > 0){
                count += search(temp, i+1, 0);
            } else if(temp === 0){
                count++;
            } else continue;
        }
        return count;
    }
    
    return search(잉여값, 0, 0);
}