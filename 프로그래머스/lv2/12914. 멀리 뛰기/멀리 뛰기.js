function solution(n) {
    // 피보나치 수열 문제 => n번째 값 = n-1번째 값 + n-2번째 값
    if(n < 3) return n;
    else {
        var temp = 0n;
        var num1 = 1n;
        var num2 = 2n;
        for(let i = 3; i <= n; i++){
            temp = num2;
            num2 = num1 + num2;
            num1 = temp;
        }
        return num2 % 1234567n;
    }
}