function solution(a, b, n) {
    var answer = 0;
    var 나머지 = 0;
    while (n >= a) {
        나머지 = n % a
        n = Math.floor(n / a) * b
        answer += n
        n += 나머지
    }

//     while((받은콜라 + 나머지) >= a){
//         console.log('answer, 나머지, 받은콜라: ', answer, 나머지, 받은콜라);
//         answer += Math.floor((받은콜라 + 나머지) / a) * b;
//         나머지 = (받은콜라 + 나머지) % a;
//         받은콜라 = Math.floor((받은콜라 + 나머지) / a) * b;
//     }
    
     return answer;
}