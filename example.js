const moment = require('moment');

// consult current timzone utc
// https://time.is/UTC
//
let momentTwo = moment();
console.log('local')
console.log(
  "MomentTwo is:", momentTwo.toString()
);
console.log(
  "MomentTwo hours:", momentTwo.hours())
  ;
console.log(
  "MomentTwo minutes:", momentTwo.minutes()
);

console.log()
console.log('utc')
// in utc format
console.log(
  "MomentTwo is:", momentTwo.utc().toString()
);
console.log(
  "MomentTwo hours in UTC:", momentTwo.utc().hours()
);
console.log(
  "MomentTwo minutes in UTC:", momentTwo.utc().minutes()
);
