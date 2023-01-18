function solution(board, moves) {
    var answer = 0;
    var boardList = {};
    var basket = [];
    
    board.forEach((item) => {
        item.forEach((v, idx) => {
            if(v !== 0){
                if(boardList[idx+1]) boardList[idx+1].push(v);
                else boardList[idx+1] = [v];
            }
        })
    })
    for(let move of moves){
        if(boardList[move] && boardList[move].length > 0){
            if(basket.at(-1) === boardList[move][0]){
                basket.pop();
                answer += 2;
            } else {
                basket.push(boardList[move][0]);    
            }
            boardList[move].shift();
        }
    }
    
    return answer;
}