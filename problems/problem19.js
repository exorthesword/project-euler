let moment = require('moment');
module.exports = function(){
    console.log('counting sundays');
    let done = false;
    let start = moment('1901-01-01');
    let end = moment('2000-12-31');
    let sunCounter =0;

    while(!done){

        if(start.weekday()===0 && start.date() === 1){
            console.log(`Found a sunday on first of month! - ${start.format('YYYY-MM-DD')}`);
            sunCounter++;
        }
        start = start.add(1,'d');
        if(start.isAfter(end))done = true;

    }
    console.log(`found ${sunCounter} sundays`)


};
