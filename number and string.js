function solution(s) {
    var answer = [];
    let alpha = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let nArray = ["0", "1", "2", '3', '4', '5', '6', '7', '8', '9'];
    let tmp = [];
    
    for(let idx=0; idx<s.length; idx++){
        if(s[idx].charCodeAt() > 58 ){
            tmp+=s[idx];
            console.log("숫자가 아니므로 " + s[idx] + "는 tmp문자열에 저장합니다.");
        }else if(s[idx].charCodeAt() < 58){
            answer+=s[idx];
            console.log("숫자이므로 " + s[idx] + "는 answer문자열에 저장합니다.");
        }
        
        for(let sIdx=0; sIdx<alpha.length; sIdx++){
            if(tmp == alpha[sIdx]){        
                answer += nArray[sIdx];
                tmp = [];
            }
        }
        
        
    }
    
    return parseInt(answer);
}
