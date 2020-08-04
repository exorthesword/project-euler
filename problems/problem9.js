
module.exports = function(){

    console.log('Pythagorean triplet');
    let a =1, b = 2, c = 0, cc = 0;

    for(a = 1; a < 500; a ++){
        for(b = a+1; b < 500; b++){
            cc = calculater(a,b);
            c = Math.sqrt(cc);
            if(!Number.isInteger(c))continue;
            if(a+b+c === 1000){
                console.log('done');
                break;
            }
            if(a+b+c > 1000){
                console.log('broken a, b, c = '+a+', '+b+', '+c + ' => '+ (a+b+c))
                break;
            }
        }
        // console.log('a, b, c = '+a+', '+b+', '+c)
        if(!Number.isInteger(c))continue;
        if(a+b+c === 1000){
            console.log('done')
            break;
        }
    }

    let prod = a*b*c;
    console.log(prod);
}
function calculater (a, b){
    return a*a + b*b ;
}