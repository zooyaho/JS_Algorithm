function solution(strings, n) {
    var answer = strings.sort((a,b) => {
      return a.charCodeAt(n) === b.charCodeAt(n) ?
        (a > b ? 1 : -1) :
        a.charCodeAt(n) - b.charCodeAt(n)
    });
    
    return answer;
}