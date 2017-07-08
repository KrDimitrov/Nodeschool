//Since the excerice requires us to make our own module, we also need to require it..
var filterReadModule = require('./filterandread.js');

//The module exports the only function wihtout a name, so we just call the modulename instead..
//The function takes 3 arguments: dir path, exntension to filter, and a callback function
filterReadModule(process.argv[2], process.argv[3], function(err, data){

  //check of errors and print them
  if(err) console.log('ERROR ' + err);

  //since our module function passes an array to this callback we loop it and print the filename.
  data.forEach(function(file){
    console.log(file);
  });
});
