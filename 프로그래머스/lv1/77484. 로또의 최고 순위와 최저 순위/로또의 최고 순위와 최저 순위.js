function solution(lottos, win_nums) {
    var answer = [];
    var temp = [0,0]; // 당첨 개수, 지워진 수의 개수
    var 가능성 = []; // 최고, 최저
    
    for(let num of lottos){
        if(win_nums.indexOf(num) !== -1) temp[0]++;
        if(num === 0) temp[1]++;
    }
    가능성.push(temp[0] + temp[1]); // 최고
    가능성.push(temp[0]); // 최저
    
    for(let i = 0; i<가능성.length; i++){
        if(가능성[i] >= 6) answer.push(1);
        else if(가능성[i] >= 5) answer.push(2);
        else if(가능성[i] >= 4) answer.push(3);
        else if(가능성[i] >= 3) answer.push(4);
        else if(가능성[i] >= 2) answer.push(5);
        else  answer.push(6);
    }
    
    return answer;
}