const { writeFile, appendFile, unlink } = require("fs")

//appendFile('data.txtZ','Hello Nefise!!!',(error)=>{if(error){throw error}console.log('Added to the file...')})
//appendFile('data.txt','Hello Nefise!!!',(error)=>{if(error){throw error}console.log('Added to the file...')})

unlink('data.txtz',(error)=>{if(error)throw error;console.log('File deleted!!!')})
