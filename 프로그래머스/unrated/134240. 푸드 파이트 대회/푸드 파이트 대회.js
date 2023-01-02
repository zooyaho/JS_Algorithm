function solution(food) {
    var answer = '';
    for(let i = 1; i<food.length; i++){
        var 음식의수 = Math.floor(food[i] / 2);
        for(let j = 0; j < 음식의수; j++) answer += i;
    }
    answer = answer + '0' + answer.split('').reverse().join('');
    return answer;
}