const express = require('express')
const app = express()
const port = 3000
const user= require('./routers/user')
const about= require('./routers/about')

//const isAuthorized = require('./helpers/isAuthorized')
//app.use('/user',isAuthorized)

app.set('view engine','pug')

app.use('/',user)
app.use('/armut/',about)

app.use((err,req,res,next)=>{
    res.status(err.status)
    res.render('error.pug',{message:err.message,status:err.status})
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))
