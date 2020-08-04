

module.exports = function(){

    let done = false;
    let current = 202682320;
    while(!done){
        if(isWinner(current)){
            done = true;
        }else {
            current+=20;
        }
    }
    console.log(current);

}
function isWinner(num){
    console.log('checking this number~' + num)


    if(num % 20 !== 0 )return false;
    if(num % 19 !== 0 )return false;
    if(num % 18 !== 0 )return false;
    if(num % 17 !== 0 )return false;
    if(num % 16 !== 0 )return false;
    if(num % 15 !== 0 )return false;
    if(num % 14 !== 0 )return false;
    if(num % 13 !== 0 )return false;
    if(num % 12 !== 0 )return false;
    if(num % 11 !== 0 )return false;
    if(num % 10 !== 0 )return false;
    if(num % 9 !== 0 )return false;
    if(num % 8 !== 0 )return false;
    if(num % 7 !== 0 )return false;
    if(num % 6 !== 0 )return false;
    if(num % 5 !== 0 )return false;
    if(num % 4 !== 0 )return false;
    if(num % 3 !== 0 )return false;
    if(num % 2 !== 0 )return false;
    if(num % 1 !== 0 )return false;
    return true;

}