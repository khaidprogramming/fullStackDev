const fs = require('fs');

function readFile(){
  fs.readFile('./a.txt', 'utf8', function(err, data){
    if(err) throw err;
    console.log(data);
  
}) }

readFile()

for(let i = 0;i<100;i++){
  
}
console.log("i am here in bottom")


