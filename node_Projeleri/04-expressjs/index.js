const fs = require('fs');
const http = require('http');

const myserver = http.createServer((req,res)=>{
    console.log("There is a erquest from: ", req.url);
    fs.readFile('demo.html',(err,data)=>{if(err) throw err; res.end(data)})
});


myserver.listen(3000);