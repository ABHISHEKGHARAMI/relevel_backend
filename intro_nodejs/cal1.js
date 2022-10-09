//onst sum = require('./lib/math');
//console.log(sum(2,3));
//const { funct } = require('./lib/math');
//console.log(funct(6,2));
const {subExport} = require('./lib/math');
console.log(subExport(3,1));

const {sumExport}= require('./lib/math');
console.log(sumExport(10,1));

const {mulExport}= require('./lib/math');
console.log(mulExport(10,2));