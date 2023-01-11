function solution(n, left, right) {
    // 1. var arr = new Array(right - leht + 1).fill(0) -> 배열 개수
    // 2. arr.reduce((acc, _, idx)=>{ ... }, []);
    // 3. Math.max(x+1, y+1) -> 좌표의 값 계산
    // 4. 이때 x,y를 일차원 배열에서의 좌표를 계산해야하는데
    // 5. x = parseInt(Math.floor(idx / n)) , y = parseInt(inx % n)
    // 6. 5번에서 idx를 idx + left로 계산하여 출력
    
    return new Array(right - left + 1).fill(0)
        .reduce((acc, _, idx) => {
        acc[idx] = Math.max(parseInt(Math.floor((idx + left) / n)) + 1, parseInt((idx + left) % n) + 1);
        return acc;
    }, []);
}