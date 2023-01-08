function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++){
            var temp = [];
            for(let j = 0; j < arr2[0].length; j++){
                var sum = 0;
                for(let k = 0; k < arr2.length; k++){
                    sum += arr1[i][k] * arr2[k][j];
                }
                temp.push(sum);
            }
            answer.push(temp);
    }
    return answer;
}