//we need the Filesystem module, to read the Filesystem..
var fs = require('fs');

//and the path module, to get the extension of a file
var path = require('path');

//we need to call module.exports, otherwise we cant call the function from another js file.
module.exports = function (dir, ext, callback){

  //readdir async, takes a dir path and a callback function
  fs.readdir(dir, function(err, files){

    //catch any errors and pass them to the callback
    if(err) return callback(err);

    //Here we define an array that wil contain all filtered files.
    var filteredFiles = [];

    //and an int to loop...
    var i = 0;

    //loop the array that the readdir passes
    files.forEach(function(file){

      //check if the file extenson matches our filter
      if(path.extname(file) == '.' + ext){

        //Add the file to the array
        filteredFiles[i] = file;

        //increase the int, so we can add the next file to the array
        // just like
        // for(i = 0, i < array.legth; i++) {....}
        i++;
      }
    });

    //And finally, pass the array that contains all the filtered filenames to the callback, err = null
    //since we dont have any errors, we checked already..
    callback(null, filteredFiles);
  });
}
