const fs = require('fs');

function readFile(){
  fs.readFile('a.txt', 'utf8', function(err, data){
   data+=" Welcome to my world";
    fs.writeFile('a.txt', data, function(err){
      console.log("text successfully added")
    }
  )
}) }



readFile()


