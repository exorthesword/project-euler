
module.exports =  function (){
    console.log('starting p3');

    let max = 600851475143;
    let allFactors = [];
    for (let i = 2; i <Math.sqrt (max ); i ++ ){
        if (max % i === 0){
            console.log('found a factor - ' + i);
            allFactors.push(i);
        }
        if(i % 500000 === 0 ){
            console.log(i);
        }
    }
    let allPrimeFactors = [];
    for (let i = 0; i < allFactors.length; i ++){
        let thisFactor = allFactors[i];
        if(isPrime(thisFactor)){
            allPrimeFactors.push(thisFactor);
        }
    }

    console.log('largest factor of ' + max+ ' is ' + allFactors[allFactors.length-1]);
    console.log('largest prime factor of '+ max+ ' is '+ allPrimeFactors[allPrimeFactors.length-1])

    console.log('DONE p3');
}
function isPrime(num){
    console.log('calculating primeness of ' + num);
    for(let i = 2; i <= Math.sqrt(num); i ++){
        if(num % i === 0)return false;
    }
    return true;
}