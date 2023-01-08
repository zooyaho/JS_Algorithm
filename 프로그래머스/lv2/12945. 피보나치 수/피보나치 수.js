function solution(n) {
        var temp = 0;
        var num1 = 0n;
        var num2 = 1n;
        for(let i = 2; i <= n; i++){
            temp = num2;
            num2 = num1 + num2;
            num1 = temp;
        }
        return num2 % 1234567n;
}