//We need this module to create the TCP server
var net = require('net');

//net.createServer returns an object that we store as a var, and take a callback function
var server = net.createServer(function(socket){

  //Create the date var from the current date
  var date = new Date(Date.now());

  //we make the response string, so that it meets the requirements
  var response = date.getFullYear() + "-" + zeroFill((date.getMonth() + 1)) + "-" + zeroFill(date.getDate()) + " "
  + date.getHours() + ":" + date.getMinutes() + "\n";

  //end the socket, takes an optional argument, that will be sent as a response.
  socket.end(response);
});

//The challenge requires us to zeroFill the integers, so we need to make a function for that
//we pass to it the integer that we want to zeroFill.
function zeroFill(i){

  //check if the i is more or equal to than 10, if so just return the same int.
  if(i>=10){
    return i;
  }

  //if less than 10, then zero fill.
  if(i<10){

    //add a 0 to the string and return it.
    return 0 + i.toString();
  }
}

//start the server, takes a port as the first argument
server.listen(process.argv[2]);
