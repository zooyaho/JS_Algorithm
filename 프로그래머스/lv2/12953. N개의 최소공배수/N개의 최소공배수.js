function solution(arr) {
    var lcm = 1;
    while(true){
        var flag = true;
        for(let num of arr){
            if(lcm % num !== 0) {
                flag = false;
                break;
            }
        }
        if(flag) break;
        lcm++;
    }
    return lcm;
}