function solution(record) {
    var userName = {}
    var print = [];
    
    record.forEach((data) => {
        var [state, uid, name] = data.split(" ");
        if(state === 'Enter' || state === 'Change')
            userName[uid] = name;
        if(state === 'Enter' || state === 'Leave')
            print.push([state, uid]);
    });
    print = print.map((v) => {
        if(v[0] === 'Enter') return `${userName[v[1]]}님이 들어왔습니다.`
        else return `${userName[v[1]]}님이 나갔습니다.`
    })
    return print;
}