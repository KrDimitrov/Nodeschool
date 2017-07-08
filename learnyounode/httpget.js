//In order to use http.get we need to require it..
var http = require('http');

//Http get function, takes a url as the first argument, and a callback function as a second.
http.get(process.argv[2], function(result){
  //result is a Node stream and has different events, like error, data and end
  //catch any errors
  result.on("error", function(error){
    console.log("ERROR " + error);
  });
  //print any data
  result.on("data", function(data){
    console.log(data.toString());
  });


});
