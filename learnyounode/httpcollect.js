// There are multiple solutions for this challenge, with some extra modules from streams..
//but i chose to do the most easy one..
//
//As always we need our http module
var http = require('http');

//and somewhere to store our full string.
var completeData = "";

//Then we call the get function, which we learnt last time.
http.get(process.argv[2], function(result){

  //catch any errors..
  result.on("error", console.log);

  //The data comes in chunks, and not all at once
  //So we append the new data that comes everytime the event fires, to the string from the previus fire
  result.on("data", function(data){

      //Just usint the += operator, basically means x = x + y
      completeData += data.toString();
  });

  //When the last chunk if data is finished processing, the end event fires,
  //Here we just print everything the challenge told us to.
  result.on("end", function(data){
    console.log(completeData.length);
    console.log(completeData);
  });

});
