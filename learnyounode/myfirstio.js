//We load our FileSystem module, without it we cant read the FileSystem.
var fs = require('fs');

//Here we read the path given as the first argument, as a file.
// Since readFileSync() returns a Buffer, we convert it to a string, and then
// split it using .split('\n'). the split function returns an array containing
// all the strings from the file we read split by the end of each line.
var file = fs.readFileSync(process.argv[2]).toString().split('\n');

// Here we read the length of the array (the amount of strings stored) and then
// subtract 1, because the end of the file counts as a new line.
var NumOfLines = file.length - 1;

//At the End we output out result.
console.log(NumOfLines);

//The whole program can be written in two lines:
//
// var fs = require('fs');
//
// console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1);
