const d3 = require('d3-time');

// var start = new Date(2021, 00, 01);
// var end =new Date(2021, 00, 18);

var start = new Date(2021, 02, 01);
var end =new Date(2021, 03, 01);

var miliSegundosDia = 24*60*60*1000;
var resultado = (end-start)/miliSegundosDia;
console.log('primer resultado:', resultado);

resultado = d3.timeDay.count(start, end);
console.log('segundo resultado con d3-time: ', resultado);
