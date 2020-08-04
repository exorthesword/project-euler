

module.exports = function(){
    console.log('longest collatz sequence')

    let sequenceDictionary = {
        1:1
    };

    let maxChain = 0, maxStarter=0;
    for(let i = 1; i < 1000000; i ++){

        let chainLength = getStepsTo1(i);
        if(chainLength > maxChain){
            maxStarter = i;
            maxChain = chainLength;
        }
        console.log("number :["+i+"] has chain length of ["+chainLength+"]")
    }

    console.log(maxStarter)

    function getStepsTo1(current,){
        if(sequenceDictionary[current]!== undefined){
            return sequenceDictionary[current];
        }
        else {
            if(current % 2 ===0){
                sequenceDictionary[current] = getStepsTo1(current /2 ) + 1
            }else {
                sequenceDictionary[current] = getStepsTo1((3*current + 1) ) + 1
            }
            return sequenceDictionary[current];
        }
    }

};
