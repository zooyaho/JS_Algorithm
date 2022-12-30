function solution(s) {
    var temp = [];
    var count = 0;
    var spaceCount = 0;
    
    for(let str of s){
        if(str === ' ') {
            // if(spaceCount === 0) temp.push(str);
            temp.push(str);
            // spaceCount++;
            count = 0;
        } else { // 문자일 때
            if(count % 2 === 0) {
                temp.push(str.toUpperCase());
                // spaceCount = 0;
                count++;
            } else {
                temp.push(str.toLowerCase());
                // spaceCount = 0;
                count++;
            }
        }
    }
    return temp.join('');
}