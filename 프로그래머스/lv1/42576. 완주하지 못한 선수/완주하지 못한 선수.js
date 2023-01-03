function solution(participant, completion) {
   var temp = participant.reduce((prev, cur)=>{
       // if(prev[cur] === 1) return cur;
       prev[cur] = (prev[cur] | 0) + 1;
       return prev;
   }, {});
   // if(typeof temp === 'string') return temp;
    completion.forEach((c, i) => {
        temp[c]--;
    });
    for(let t in temp){
        if(temp[t] === 1 || temp[t] === 2) return t
    }
}