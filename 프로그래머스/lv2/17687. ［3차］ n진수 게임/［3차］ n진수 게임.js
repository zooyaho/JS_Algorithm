function solution(n, t, m, p) {
    var answer = [];
    var list = [];
    var i = 0;
    while(list.length < t * m){
        var word = i.toString(n);
        list.push(...word);
        i++;
    }
    for(let i = 0; (i * m) + p <= t*m; i++){
        answer.push(list[(i * m) + p - 1]);
    }
    return answer.join("").toUpperCase();
}