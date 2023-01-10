function solution(progresses, speeds) {
    var answer = [];
    var remain = [];
    progresses.forEach((p, i)=>{
        remain.push(Math.ceil((100 - p) / speeds[i]));
    });
    var temp = remain[0];
    var count = 0;
    remain.forEach((r, i) => {
        if(temp < r){ // 
            answer.push(count);
            count = 0;
            temp = r;
        } 
        count++;
        if(remain.length-1 === i) answer.push(count);
    })
    return answer;
}