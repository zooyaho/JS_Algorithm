function solution(answers) {
    var answer = [];
    var temp = [];
    var students = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    
    for(let student of students){
        var count = 0;
        var index = 0;
        for(let i = 0; i<= answers.length; i++){
            if(index === student.length) index = 0;
            if(answers[i] === student[index]) count++;
            index++;
        }
        temp.push(count);
    }
    
    var maxNum = Math.max(...temp);
    for(let i = 0; i<= temp.length; i++){
        if(maxNum === temp[i]){
            answer.push(i+1);
        }
    }
    
    return answer.sort((a,b)=>a-b);
}