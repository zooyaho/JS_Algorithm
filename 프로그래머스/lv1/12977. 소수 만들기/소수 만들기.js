function solution(nums) {
    var answer = 0;
    
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                var num = nums[i] + nums[j] + nums[k];
                var count = 0;
                for(let l = 2; l < num; l++){
                    if(num % l === 0) { count++; break;}
                }
                if(count === 0) answer++;
            }
        }
    }
    
    
    return answer;
}