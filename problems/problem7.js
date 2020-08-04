module.exports = function(){

    console.log('problem 7 - 10001st prime');


    let iterator = 2, location = 1, target = 10001;
    let done = false;
    while(!done){
        if(isPrime(iterator)){

            console.log('This is the '+location+' located prime number - '+iterator)
            if(location===target){
                done = true;
            }
            location++;
        }
        iterator++;
    }

}



function isPrime(num){
    // console.log('calculating primeness of ' + num);
    for(let i = 2; i <= Math.sqrt(num); i ++){
        if(num % i === 0)return false;
    }
    return true;
}