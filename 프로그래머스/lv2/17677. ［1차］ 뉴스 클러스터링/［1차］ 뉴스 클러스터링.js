function solution(str1, str2) {
    var answer = 0;
    // 둘다 공집합일 경우 1반환
    if(str1.length === 0 && str2.length === 0) return 1;
    str1 = str1.split('').map((i)=>{
        if(/[a-zA-Z]/.test(i)) return i.toUpperCase();
        else return i;
    });
    str2 = str2.split('').map((i)=>{
        if(/[a-zA-Z]/.test(i)) return i.toUpperCase();
        else return i;
    });
    var a = [];
    var b = [];
    for(let i = 0; i < str1.length - 1; i++){
        if(/[A-Z]/.test(str1[i]) && /[A-Z]/.test(str1[i+1])){
            a.push(str1.slice(i,i+2).join(''));
        }
    }
    for(let i = 0; i < str2.length - 1; i++){
        if(/[A-Z]/.test(str2[i]) && /[A-Z]/.test(str2[i+1])){
            b.push(str2.slice(i,i+2).join(''));  
        }
    }
    // 다중집합 체크 
    a = a.reduce((prev, cur) => {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});
    b = b.reduce((prev, cur) => {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});
    var 교집합 = [];
    var 합집합 = [];
    for(let item in a){
        // 교집합
        if(b[item]){
            var count = Math.min(a[item], b[item]);
            while(count > 0){
                교집합.push(item);
                count--;
            }
        }
    }
    for(let item in a){
        // 합집합
        if(b[item]){
            var count = Math.max(a[item], b[item]);
            while(count > 0){
                합집합.push(item);
                count--;
            }
        } else {
            var count = a[item];
            while(count > 0){
                합집합.push(item);
                count--;
            }
        }
    }
    for(let item in b){
        if(!a[item]) {
            var count = b[item];
            while(count > 0){
                합집합.push(item);
                count--;
            }
        }
    }
    if(교집합.length === 0 && 합집합.length === 0) return 65536
    
    return Math.floor(교집합.length / 합집합.length * 65536);
}