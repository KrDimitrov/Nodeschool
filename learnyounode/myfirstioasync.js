//As Always, we require our FileSystem module.
var fs = require('fs');

//In order to read the file async, we use readFile(pathToFile, callback());
//The function takes two parameters, the path to the file, which we get from process.argv[2],
//and a callback function, which we directly define. The callback function also takes two parameters
//and error var, and a data var. The data var contains the whole file.
fs.readFile(process.argv[2], function (err, data){
  //here we check if we have any errors, and if so, we throw.
  if (err) throw err;
  //Here we convert the data var to a String, otherwise we cant call the split function.
  //We then split the file, like last time, and output its length - 1, because the end
  //of the file counts as a new line.
  console.log(data.toString().split('\n').length - 1);
});
