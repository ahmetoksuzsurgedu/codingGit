const express = require('express')
const app = express()
const port = 3003

app.set('view engine','pug');

//  app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.render('index.pug',{name:'Nefise',phone:'123-456-789'}))
app.get('/home', (req, res) => res.render('home'))
app.get('/contact', (req, res) => res.render('contact'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))