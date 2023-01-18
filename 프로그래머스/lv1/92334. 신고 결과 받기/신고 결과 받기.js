function solution(id_list, report, k) {
    var answer = [];
    
    id_list = id_list.reduce((prev, cur) => {
        prev[cur] = { count: 0, reportList: [] };
        return prev;
    },{})
    
    report = [...new Set(report)]; // 중복 제거, 동일한 유저에 대한 신고 횟수는 1회
    report.forEach((item, idx) => {
        item = item.split(" "); // ex. ["muzi", "frodo"]
        id_list[item[0]].reportList.push(item[1]); // 신고한 id list
        id_list[item[1]].count += 1; // 신고받은 횟수 카운트
    });
    
    for(let user in id_list){
        var count = 0;
        if(id_list[user].reportList.length > 0){
            for(let reportUser of id_list[user].reportList){
                if(id_list[reportUser].count >= k)
                    count++;
            }
        }
        answer.push(count);
    }
    
    return answer;
}