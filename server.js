const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const accountRouter = require('./routers/Acount.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/account', accountRouter)


app.listen(3000)