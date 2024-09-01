function solution(inputArray) {
    let max = null;
    for(var i = 0; i<inputArray.length;i++){
        const current = inputArray[i];
        if(inputArray[i+1]){
            
        const product = current * inputArray[i+1]
            if(max===null || product > max){
                max = product
            }
        }  
    }
    return max;
}
