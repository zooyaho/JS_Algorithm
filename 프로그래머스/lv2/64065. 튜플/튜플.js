function solution(s) {
    var answer = [];
    var temp = s.slice(2,-2).split("},{").sort((a,b)=>a.length-b.length);
    
    for(let word of temp){
        var num = '';
        word.split('').forEach((str, i)=>{
            if(/[0-9]/.test(str)){
                num += str;
                if(word.length-1 === i && !answer.includes(+num))
                    answer.push(+num);
            } else {
                if(!answer.includes(+num)) answer.push(+num);
                num = '';
            }
        })
    }
    return answer;
}