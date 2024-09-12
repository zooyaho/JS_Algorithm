function solution(start_num, end_num) {
    var answer = [];
    for(let j = start_num; j >= end_num; j--) {
        answer.push(j)
    }
    return answer;
}