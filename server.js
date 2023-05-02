const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)