function solution(files) {
    var answer = files
                .map((item) => item.match(/(\D+)(\d+)/))
                // TAIL을 제외한 HEAD, NUMBER를 추출.
                // ex) img12.png => [[img12], [img], [12], [.png], index: 0, input: img12.png] 이런식으로 mapping.
                .sort((a,b) => {
                    if(a[1].toUpperCase() > b[1].toUpperCase()) return 1;
                    else if(a[1].toUpperCase() < b[1].toUpperCase()) return -1;
                    // HEAD로 오름차순 sorting
                    else return +a[2] - +b[2];
                    // HEAD가 같을 경우 NUMBER로 오름차순
                })
                .map((item) => item.input);
                // input속성을 사용하여 원본으로 추출하여 반환
    
    return answer;
}