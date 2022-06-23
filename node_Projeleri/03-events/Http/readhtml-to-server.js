const {readFile} = require('fs');
const http = require('http');

const myserver = http.createServer( (request,response)=>{
    readFile('demo.html',(error,data)=>{if (error) throw error;
    response.end(data) })
} );
myserver.listen('3000');