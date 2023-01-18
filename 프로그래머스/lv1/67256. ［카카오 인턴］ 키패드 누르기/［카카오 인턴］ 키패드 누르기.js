function solution(numbers, hand) {
    var answer = '';
    var keypad = { 1:[0,0], 2:[0,1], 3:[0,2], 4:[1,0], 5:[1,1], 6:[1,2], 7:[2,0], 8:[2,1], 9:[2,2], '*':[3,0], 0:[3,1], '#':[3,2]}
    var right = [3,2];
    var left = [3,0];
    
    for(let num of numbers){
        if(num === 1 || num === 4 || num === 7) {
            answer += 'L';
            left = keypad[num]
        } else if(num === 3 || num === 6 || num === 9) {
            answer += 'R';
            right = keypad[num];
        } else {
            // num의 좌표와 right의 좌표를 계산해 "이동한 칸" 도출
            var rSum = (right[0] >= keypad[num][0] ? right[0] - keypad[num][0] : keypad[num][0] - right[0]) + (right[1] >= keypad[num][1] ? right[1] - keypad[num][1] : keypad[num][1] - right[1])
            var lSum = (left[0] >= keypad[num][0] ? left[0] - keypad[num][0] : keypad[num][0] - left[0]) + (left[1] >= keypad[num][1] ? left[1] - keypad[num][1] : keypad[num][1] - left[1])
            // 이동한 칸이 작은 손을 사용
            // 이동한 칸이 같을경우 hand check
            if(rSum < lSum || (rSum === lSum && hand === "right")) {
                answer += 'R';
                right = keypad[num];
            } else if(rSum > lSum || (rSum === lSum && hand === "left")) {
                answer += 'L';
                left = keypad[num];
            }
        }
    }
    
    return answer;
}