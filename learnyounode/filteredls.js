//As always, we require our FileSystem module
var fs = require('fs');

//Then we call a readdir function, takes two arguments, a path and a callback function
//The path is given as a first argument process.argv[2].
//The callback function takes two arguments as well, error and files.

fs.readdir(process.argv[2], function (err, files){

  //Check for error(err), and if true, throw
  if (err) throw err;

  //Loop through the files array ##COULD BE DONE WITH .foreach AS WELL##
  for(i = 0; i < files.length; i++){

    //split the file into a file name and the extension.
    //I would like to mention, that this way is wrong. If the file contains a '.'
    //We will get a wrong result.
    //For the correct way, please take a look at the end of the file

    var file = files[i].split('.');

    //if the extension(file[1]) equals the filter then log the complete filename
    if(file[1] == process.argv[3]){
      console.log(files[i]);
    }
  }
});

//CORRECT WAY
//  var fs = require('fs');
//  var path  = require('path');
//  fs.readdir(process.argv[2], functon (err, files){
//    if(err) throw err;
//    files.foreach(function (file){
//      if(path.extname === process.argv(3)){
//        console.log(file);      
//      }
//    });
//  });
//
