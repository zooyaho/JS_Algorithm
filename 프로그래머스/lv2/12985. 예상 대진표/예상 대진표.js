function solution(n,a,b){
    var aNum = a;
    var bNum = b;
    
    for(let i = 1; i <= n/2; i++){
        if((aNum % 2 === 0 && aNum - 1 === bNum) || (aNum % 2 !== 0 && aNum + 1 === bNum)) return i;
        
        if(aNum % 2 === 0) aNum  = aNum / 2;
        else aNum = (aNum + 1) / 2;

        if(bNum % 2 === 0) bNum  = bNum / 2;
        else bNum = (bNum + 1) / 2;
    }
}