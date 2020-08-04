
module.exports = function(){

    let target = 100;
    let soSQ= sumOfSquares(target);
    let sqOfS = sqaureOfSums(target);
    let ans = sqOfS - soSQ;
    console.log(ans);

}
function  sumOfSquares(num){
    let total = 0;
    for(let i = 0; i <= num; i ++){
        let square = i * i;
        total += square;
    }
    return total;
}
function sqaureOfSums(num){
    let total = 0;
    for (let i = 0; i <= num; i++){
        total += i;
    }
    return total * total;
}
