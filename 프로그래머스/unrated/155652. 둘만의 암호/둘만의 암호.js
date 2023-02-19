function solution(s, skip, index) {
    var answer = '';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(let s of skip){
        alphabet = alphabet.replace(s,'');
    }
    
    for(let str of s){
        var strIdx = alphabet.indexOf(str);
        var searchIdx = strIdx + index;
        
        if(searchIdx >= alphabet.length){
            searchIdx = searchIdx - Math.floor(searchIdx / alphabet.length) * alphabet.length;
        }
        answer += alphabet[searchIdx];
    }
    
    return answer;
}