const fs = require('fs');
const http = require('http');

const myserver = http.createServer();
myserver.on('request',(req,res) => {
// STREAMli
    const readStream = fs.createReadStream('video.mp4');
    readStream.pipe(res);

/* STREAMsiz   fs.readFile('video.mp4',(err,data)=>{   
        if (err) throw err;res.end(data);
    })
    */
})

myserver.listen(3000);