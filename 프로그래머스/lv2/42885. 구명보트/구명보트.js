function solution(people, limit) {
    var answer = 0;
    var current = people.length - 1
    var another = 0;
    
    people.sort((a,b)=>a-b);
    while(current >= another){
        if(people[current] + people[another] <= limit){
            another++
        }
        current--;
        answer++;
    }
    
    return answer;
}