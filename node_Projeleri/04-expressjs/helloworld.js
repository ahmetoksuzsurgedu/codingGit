const express = require('express');

const app=express();


app.get('/',(request,response)=>{
    response.send("Hello World with Express.js");
})

app.listen(3001);