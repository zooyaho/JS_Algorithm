function solution(dirs) {
    var visited = {};
    var x = 0;
    var y = 0;
    for(let dir of dirs){
        var before = [x, y];
        if(dir === "U"){
            if(y === 5) continue;
            else y++;
        }
        else if(dir === "D"){
            if(y === -5) continue;
            else y--;
        }
        else if(dir === "R"){
            if(x === 5) continue;
            else x++;
        }
        else if(dir === "L"){
            if(x === -5) continue;
            else x--;
        }
        if(visited[[before[0], before[1], x, y]] || 0){
            // 이미 있을 경우
            visited[[before[0], before[1], x, y]] = visited[[before[0], before[1], x, y]] + 1;    
        } else {
            // 없을 경우
            var isExist = visited[[x, y, before[0], before[1]]] || 0;
            if(isExist) {
                // 반대가 있을 경우
                visited[[x, y, before[0], before[1]]] = visited[[x, y, before[0], before[1]]] + 1;    
            } else {
                // 반대가 없을 경우
                visited[[before[0], before[1], x, y]] = 1;    
            }
            
        }
    }
    return Object.keys(visited).length;
}