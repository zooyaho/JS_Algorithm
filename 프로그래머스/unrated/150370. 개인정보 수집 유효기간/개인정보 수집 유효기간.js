function solution(today, terms, privacies) {
    var answer = [];
    // 연*28*12 + 월*28 + 일
    today = (+today.slice(0,4)*28*12) + +today.slice(5,7)*28 + +today.slice(8);
    terms = terms.reduce((prev, cur)=>{
        cur = cur.split(" ");
        prev[cur[0]] = +cur[1];
        return prev;
    }, {});
    privacies.forEach((privacy, idx) => {
        // 오늘날짜 - (privacy + 유효기간)
        var 유효기간 = +terms[privacy.at(-1)] * 28;
        privacy = (+privacy.slice(0,4)*12*28) + +privacy.slice(5,7)*28 + +privacy.slice(8,10);
        if((privacy + 유효기간) - today <= 0) answer.push(idx+1);
    });
    return answer;
}