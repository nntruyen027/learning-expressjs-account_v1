const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Account = require('./models/Account.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json('Đã kết nối thành công');
})

app.post('/register', (req, res, next) => {
    Account.create({
        username: req.body.username,
        password: req.body.password
    })
        .then(() => {
            res.json('Tạo tài khoản thành công');
        })
        .catch(() => {
            res.json('Tạo tài khoản thất bại');
        })
})

app.post('/login', (req, res, next) => {
    Account.findOne(
        {
            username: req.body.username,
            password: req.body.password
        }
    )
        .then(data => {
            if (data)
                res.json('Đăng nhập thành công');
            else
                res.json('Đăng nhập thất bại');
        })
        .catch(() => {
            res.status(500).json('Server đang bảo trì')
        })
})



app.listen(3000)