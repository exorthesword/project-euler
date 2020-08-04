module.exports = function(){

    console.log('highly divbisible triangular number');

    for(let i = 1; i < 100000; i ++){
        let tri = calculateTriangularNumber(i);
        let divisors = getDivisors(tri);
        // console.log(tri + ": has "+ divisors.length+" divisors and they are " + divisors.join(","));
        console.log(tri+" has " +divisors.length+" divisors");
        if(divisors.length > 500){
            console.log('done!');
            break;
        }
    }

}

function calculateTriangularNumber(num){
    let sum = 0;
    for(let i = 0; i <= num; i ++){
        sum+=i;
    }
    return sum;
}
function getDivisors(num){
    let listOfDivisors = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            listOfDivisors.push(i);
        }
    }
    return listOfDivisors;
}