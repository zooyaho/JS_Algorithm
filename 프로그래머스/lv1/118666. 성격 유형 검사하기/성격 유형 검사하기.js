function solution(survey, choices) {
    var answer = '';
    var score = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3,};
    var category = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    var categoryArr = [];
    
    for(let i = 0; i<survey.length; i++){
        if(choices[i] < 4) {
            category[survey[i][0]] += score[choices[i]];
        } else {
            category[survey[i][1]] += score[choices[i]];
        }
    }
    for(let c in category){
        var temp = []
        temp.push(c)
        temp.push(category[c])
        categoryArr.push(temp);
    }
    for(let i = 0; i<categoryArr.length; i += 2){
        if(categoryArr[i][1] > categoryArr[i+1][1]){
            answer += categoryArr[i][0];
        } else if(categoryArr[i][1] === categoryArr[i+1][1]){
            answer += categoryArr[i][0].charCodeAt(0) > categoryArr[i+1][0].charCodeAt(0) ? categoryArr[i+1][0] : categoryArr[i][0];
        } else {
            answer += categoryArr[i+1][0];
        }
    }
    return answer;
}