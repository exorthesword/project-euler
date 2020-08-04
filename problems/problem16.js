
module.exports = function(){

    console.log('power digit sum');

    let powerfactor = 1000;
    // let powerfactor = 15;
    let current = '2';
    for(let i = 1; i < powerfactor; i ++){
        current = multiplyStrings(current, '2');
    }
    console.log(current);
    let digitSum = 0;
    for(let i = 0; i < current.length; i ++ ){
        digitSum+= parseInt(current.charAt(i));
    }
    console.log(digitSum);


};
function multiplyStrings(top, bottom){
    let topDigits = top.split('');
    let bottomDigits = bottom.split('');

    let finalDigits=[];
    let allRows = [];
    for(let z = bottomDigits.length-1; z >= 0; z -- ){
        let thisOutputRow = '';
        let nextAddor = 0;
        let thisMultiplicand = parseInt(bottomDigits[z]);
        for(let y = topDigits.length-1; y >=0; y --){
            let thisDigitToBeMultiplied = parseInt(topDigits[y]);
            let columnMult = (thisMultiplicand * thisDigitToBeMultiplied) + nextAddor;
            let savor = (columnMult % 10);
            thisOutputRow = savor+thisOutputRow;
            nextAddor = parseInt(columnMult / 10);
        }
        if(nextAddor !== 0){
            thisOutputRow = nextAddor + '' + thisOutputRow ;
        }
        for(let i = 0 ; i < bottom.length -1 -z; i ++ ){
            thisOutputRow = thisOutputRow+'0';
        }

        allRows.push(thisOutputRow);
    }
    let maxLength = 0;
    for(let i = 0;i < allRows.length; i ++ ){
        let len  = allRows[i].length;
        if(len > maxLength){
            maxLength = len;
        }
    }
    //buffer rows left
    for (let i = 0; i < allRows.length; i ++ ){
        allRows[i] = allRows[i].padStart(maxLength, '0')
    }
    //sum all rows
    let nextAddor = 0;
    for(let i = maxLength-1 ; i >= 0; i --){
        let thisCol = 0;
        for(let t = 0; t < allRows.length; t++){
            thisCol += parseInt(allRows[t].charAt([i]));
        }
        thisCol+= nextAddor;
        finalDigits.push(thisCol%10);
        nextAddor = parseInt(thisCol/10);

    }

    let realOrder = finalDigits.reverse();
    let reducedReal  = realOrder.reduce((acc,curr)=> acc +''+curr );
    return reducedReal.toString();
}
