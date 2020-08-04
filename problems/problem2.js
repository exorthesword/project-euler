

module.exports =  function (){
    console.log('starting p2');

    let n_m2 = 1, n_m1 = 2, current = 3, sumEvens = 2;
    let max = 4000000;
    while(current < max){
        n_m2 = n_m1;
        n_m1 = current;
        current = n_m2 + n_m1;
        if(current % 2 === 0 ){
            console.log(`adding [{`+current+`}] to sumEvens`);
            sumEvens += current;
        }
    }
    console.log('sum all evens less than ' + max + ' is '+ sumEvens);

    console.log('DONE p2');
}