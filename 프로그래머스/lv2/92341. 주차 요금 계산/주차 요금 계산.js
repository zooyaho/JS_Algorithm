function solution(fees, records) {
    var recordsObj = records.reduce((prev, cur)=>{
       var record = cur.split(" ");
        if(prev[record[1]]) prev[record[1]] = [...prev[record[1]], record[0]]
        else prev[record[1]] = [record[0]];
        return prev;
    }, {});
    var feesList = [];
    
    for(let carNum in recordsObj){
        var totalTime = 0;
        var resH = 0;
        var resM = 0;
        var idx = recordsObj[carNum].length % 2 === 0 ? recordsObj[carNum].length : recordsObj[carNum].length + 1;
        
        for(let i = 0; i < idx; i++){
            if(recordsObj[carNum].length === i){
                resH -= 23;
                resM -= 59;
                totalTime += (-resH * 60) + -resM;
                break;
            }
            
            var hour = recordsObj[carNum][i].slice(0,2);
            var minute = recordsObj[carNum][i].slice(3);
            
            if(i % 2 === 0) {
                resH += +hour;
                resM += +minute;
            }
            else {
                resH -= +hour;
                resM -= +minute;
                totalTime += (-resH * 60) + -resM;
                resH = 0;
                resM = 0;
            }
        }
        
        if(fees[0] >= totalTime) feesList.push([+carNum, fees[1]]);
        else {
            var remainTime = totalTime - fees[0];
            feesList.push([+carNum, fees[1] + Math.ceil(remainTime / fees[2]) * fees[3]]);
        }
    }
    return feesList.sort((a,b)=>a[0]-b[0]).map((item)=>item[1]);
}