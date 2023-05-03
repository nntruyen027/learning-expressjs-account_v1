const express = require('express');
const router = express.Router();
const accountModel = require('../models/Account')

router.get('/', (req, res, next) => {
    accountModel.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json('Lỗi server');
        })
})

router.post('/', (req, res, next) => {
    accountModel.create(
        {
            username: req.body.username,
            password: req.body.password
        }
    )
        .then(() => res.json('Tạo tài khoản mới thành công'))
        .catch(err => {
            res.json('Tạo tài khoản thất bại: ' + err)
        })
})


router.put('/:id', (req, res, next) => {
    accountModel.updateOne(
        { _id: req.params.id },
        { password: req.body.password }
    )
        .then(() => res.json('Cập nhật tài khoản thành công'))
        .catch(err => {
            res.json('Tạo tài khoản thất bại: ' + err)
        })
})


router.delete('/:id', (req, res, next) => {
    accountModel.deleteOne(
        { _id: req.params.id },
    )
        .then(() => res.json('Xóa tài khoản thành công'))
        .catch(err => {
            res.json('Xóa tài khoản thất bại')
        })
})






module.exports = router
