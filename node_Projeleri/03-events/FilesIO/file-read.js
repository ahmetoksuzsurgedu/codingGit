const fs = require ('fs');

fs.readFile('data.txt',(error,data)=>{
    if (error) {console.log(error);} console.log(data.toString());})

//console.log("Read...");