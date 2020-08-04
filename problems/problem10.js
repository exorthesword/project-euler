module.exports = function(){
    console.log('summation of primes');

    let target = 2000000;
    let sum = 0;
    for(let i = 2; i < target; i ++){
        if(isPrime(i)){
            sum+=i;
        }
    }
    console.log(sum);

}



function isPrime(num){
    // console.log('calculating primeness of ' + num);
    for(let i = 2; i <= Math.sqrt(num); i ++){
        if(num % i === 0)return false;
    }
    return true;
}