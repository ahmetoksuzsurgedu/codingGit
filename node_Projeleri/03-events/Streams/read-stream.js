const fs = require('fs');
const file = "video.mp4";

let progress = 0;
fs.stat(file, (err,data)=>{
    const total = data.size;
    console.log('Total file size in bayt: ', total);


const readStream = fs.createReadStream(file);

readStream.on('data',(chunk)=>{
  //  console.log('Chunk Size: ',chunk.length)
  //  console.log('Chunk received...');
    progress += chunk.length;
    console.log((Math.round(100*progress)/total)+'%');
});

readStream.on('end',()=>{
    console.log('Data finished...');
});

})