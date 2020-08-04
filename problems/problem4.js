

module.exports = function(){
    console.log('staring p4');
    let allPalinProds = [];
    for(let i = 500; i < 1000; i ++){
        for(let j = 500; j < 1000; j ++){
            let thisProd = i * j;
            if(isPalin(thisProd)){
                allPalinProds.push(thisProd)
            }
        }
    }
    let largest = 0;
    for(let i = 0; i < allPalinProds.length; i ++){
        let thisProd = allPalinProds [i];
        if(thisProd > largest) largest = thisProd;
    }
    console.log('this is the largest palindrom product - ' + largest)

    console.log('done p4');
};
function isPalin(num){
    console.log('determining palindromeness of ' + num);
    let forwards = num.toString();
    let splitString = forwards.split("");
    let reverseArray = splitString.reverse();
    let backwards = reverseArray.join("");

    return forwards === backwards
}