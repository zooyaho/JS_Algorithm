function solution(cacheSize, cities) {
    var answer = 0;
    cities = cities.map((item)=>item.toLowerCase());
    var cacheArr = [];
    
    if(cacheSize === 0) return cities.length * 5;
    for(let i = 0; i < cities.length; i++){
        if(cacheArr.includes(cities[i])){
            // cache hit일때
            var temp = [];
            for(let item of cacheArr){
                if(item !== cities[i]) temp.push(item);
            }
            temp.unshift(cities[i]);
            cacheArr = temp;
            answer++;
        } else {
            // cache miss일때
            if(cacheArr.length === cacheSize){
                cacheArr.pop();
            }
            cacheArr.unshift(cities[i]);     
            answer += 5;
        }
    }
    return answer;
}