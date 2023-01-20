function solution(skill, skill_trees) {
    var answer = 0;
    skill = skill.split("").reduce((prev, cur, idx)=>{
        prev[cur] = idx + 1;
        return prev;
    }, {});
    for(let item of skill_trees){
        var temp = [];
        var flag = true;
        for(let i = 0; i < item.length; i++){
            if(skill[item[i]]) { // ex. skill[A]
                if(skill[item[i]] > 1 && !temp.includes(skill[item[i]] - 1)){
                    flag = false;
                    break;
                } else temp.push(skill[item[i]]);
            }  
        }
        if(flag) answer++;
    }
    return answer;
}