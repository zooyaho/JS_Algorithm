function solution(record) {
    record = record.map((v)=>v.split(" "));
    var userName = {}
    var print = [];
    
    record.forEach((data) => {
        if(data[0] === 'Enter' || data[0] === 'Change')
            userName[data[1]] = data[2];
        if(data[0] === 'Enter' || data[0] === 'Leave')
            print.push([data[0], data[1]]);
    });
    print = print.map((v) => {
        if(v[0] === 'Enter') return `${userName[v[1]]}님이 들어왔습니다.`
        else return `${userName[v[1]]}님이 나갔습니다.`
    })
    return print;
}