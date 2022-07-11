
const express = require('express')
const app = express()
app.use(express.json());


app.get('/', function (get, res) {
    res.send('hello student database')
})


const port = process.env.PORT || 3000;
app.listen(port);