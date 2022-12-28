function solution(a, b) {
    var answer = '';
    var day = ['FRI','SAT', 'SUN','MON','TUE','WED','THU'];
    var date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var totalDate = 0;
    
    for(let i = 1; i < a; i++){
        totalDate += date[i-1];
    }
    totalDate += b-1;
    answer = day[Math.floor(totalDate % 7)];
    
    return answer;
}