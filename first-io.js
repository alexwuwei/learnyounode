// var fs = require('fs');
//
// var file = fs.readFileSync(process.argv[0], 'utf8');
//
// fileString = String(file);
//
// newLinesCount = fileString.split('\n');
//
// return newLinesCount;

var fs = require('fs');
var file = process.argv[2],
lineCount = 0,
strBuffer;

strBuffer = fs.readFileSync(file, 'utf8');
strBuffer = strBuffer.replace(/\n+$/, '');
strBuffer = strBuffer.split('\n');
lineCount = strBuffer.length-1;

console.log(lineCount);
