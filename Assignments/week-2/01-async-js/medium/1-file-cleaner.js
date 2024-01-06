const fs = require('fs');

function readAndWrite(){
  fs.readFile('a.txt', 'utf8', function(err, data){
    let modified =  data.replace(/\s+/g, ' ');
    fs.writeFile('a.txt', modified, function(err){
      console.log("File cleaned successfully")
    }
  )
}) }



readAndWrite()




