function solution(priorities, location) {
    priorities = priorities.map((item, idx)=>[idx, item]);
    var stack = []; // 뒤에 자신보다 높은 우선순위가 "있는" 순위들
    var temp = []; // 뒤에 자신보다 높은 우선순위가 "없는" 순위들
    var i = 0;
    while(true){
        var flag = true;
        for(let j = i+1; j < priorities.length; j++){
            if(priorities[i][1] < priorities[j][1]){
                stack.push(priorities[i]);
                flag = false;
                break;
            }
        }
        if(flag) temp.push(priorities[i]);
        i++;
        if(i === priorities.length){
            if(stack.length === 0) break;
            priorities = [...temp, ...stack];
            temp = [];
            stack = [];
            i = 0;
        }
    }
    return priorities.findIndex((item)=>item[0] === location) + 1;
}