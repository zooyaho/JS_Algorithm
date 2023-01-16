function solution(n, t, m, p) {
    var answer = [];
    var list = [];
    var i = 0;
    while(list.length < t * m){
        var word = i.toString(n);
        list.push(...word.split("").map((v)=>{
            if(/[a-z]/.test(v)) return v.toUpperCase();
            else return v;
        }));
        i++;
    }
    for(let i = 0; (i * m) + p <= t*m; i++){
        answer.push(list[(i * m) + p - 1]);
    }
    return answer.join("");
}