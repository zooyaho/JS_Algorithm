function solution(cards1, cards2, goal) {
    var copy = [...goal];
    
    for(let i = 0; i < goal.length; i++){
        if(goal[i] === cards1[0]){
            if(cards1.length > 1) cards1.shift();
            copy.shift();
        } else if(goal[i] === cards2[0]){
            if(cards2.length > 1) cards2.shift();
            copy.shift();
        } else break;
    }
    return copy.length === 0 ? "Yes" : "No";
}