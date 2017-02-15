var moment = require('moment');
var now = moment();

//console.log(now.format('Do-MMM-YYYY h:mm a'));
//console.log(now.format());

var timestamp = 1444247486704;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));