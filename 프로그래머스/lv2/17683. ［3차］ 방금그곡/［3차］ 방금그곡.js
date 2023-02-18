function solution(m, musicinfos) {
    var answer = [];
    
    const change = (musicList) => {
        var music = {'C': 1, '#C': 'a', 'D': 2, '#D': 'b', 'E': 3,'#E': 'c', 'F': 4, '#F': 'd', 'G': 5, '#G': 'e', 'A': 6, '#A': 'f', 'B': 7, '#B': 'g'}
        var infosTemp = [];
        var stack = '';
        for(let i = musicList.length - 1; i >= 0; i--){
            stack += musicList[i];
            if(music[stack]){
                infosTemp.unshift(music[stack]);
                stack = '';
            }
        }
        return infosTemp;
    }
    
    m = change(m).join('');
    
    musicinfos.forEach((infos, idx) => {
        infos = infos.split(",");
        var start = 60 * +infos[0].slice(0,2) + +infos[0].slice(3)
        var end = 60 * +infos[1].slice(0,2) + +infos[1].slice(3)
        var timer = end - start;
        // if(timer < 0) { timer *= -1 }
        infos[3] = change(infos[3]);
        var musicList = '';
        
        if(infos[3].length < timer){ // 악보가 더 짧을 경우
            for(let i = 0; i < timer; i += infos[3].length){
                musicList += infos[3].join('');
            }
        } else {
            musicList = infos[3].slice(0,timer).join('');
        }
        if(musicList.includes(m)){
            answer.push([infos[2], timer, idx]);
        }
    });
    if(answer.length > 1) {
        answer.sort((a,b) => b[1] - a[1]); // 재생시간 제일 긴 내림차순
        if(answer[0][1] !== answer[1][1]) return answer[0][0];
        else {
            var temp = [];
            for(let info of answer){
                if(answer[0][1] === info[1]) temp.push(info);
            }
            temp.sort((a,b)=>a[2]-b[2]);
            return temp[0][0];
        }
    } else if(answer.length === 1) return answer[0][0];
    else return "(None)";
}