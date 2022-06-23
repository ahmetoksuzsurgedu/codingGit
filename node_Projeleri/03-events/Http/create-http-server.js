const http = require('http');

const server = http.createServer((request,response)=>{
    console.log('Request from user...',request.url);
    response.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    response.write("<h2>Hi!!! I am from response... , Ä,Ü,Ö,ß</h2>");
    response.end();
});
server.listen(3000);