const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World from GET!'))
app.get('/contact', (req, res) => res.send('Hello World from Contact!'))
app.post('/', (req, res) => res.send('Hello World from POST method!'))
app.delete('/', (req, res) => res.send('Hello World from DELETE method!'))
app.put('/', (req, res) => res.send('Hello World from PUT method!'))
app.all('/info', (req, res) => res.send('Hello World from ALL method!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/user/:id', (req, res) => {res.send('Hello World from Contact!  User Id: '+req.params.id)})
