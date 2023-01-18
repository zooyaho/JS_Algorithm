function solution(board) {
    var dangerCount = 0;
    var danger = {};
    
    // 위험 지역 좌표 danger에 추가
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j<board.length; j++){
            if(board[i][j] === 1){
                // ex. [1,0] -> { '1,0' : 0 }
                danger[[i,j]] = (danger[[i,j]] || 0) + 1;
                danger[[i,j-1]] = (danger[[i,j-1]] || 0) + 1;
                danger[[i,j+1]] = (danger[[i,j+1]] || 0) + 1;
                danger[[i-1,j]] = (danger[[i-1,j]] || 0) + 1;
                danger[[i-1,j-1]] = (danger[[i-1,j-1]] || 0) + 1;
                danger[[i-1,j+1]] = (danger[[i-1,j+1]] || 0) + 1;
                danger[[i+1,j]] = (danger[[i+1,j]] || 0) + 1;
                danger[[i+1,j-1]] = (danger[[i+1,j-1]] || 0) + 1;
                danger[[i+1,j+1]] = (danger[[i+1,j+1]] || 0) + 1;
            }
        }
    }
    
    for(let location in danger){
        location = location.split(','); // ex. [0, 1]
        if((location[0] >= 0 && location[0] < board.length) &&
           (location[1] >= 0 && location[1] < board.length))
        {
            dangerCount++;
        }
    }
    
    return board.length * board.length - dangerCount;
}