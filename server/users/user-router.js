const express = require('express')

const Users = require('./user-model')

const router = express.Router()

router.get('/', (req, res) => {
    Users.getUsers()
    .then(res => {
        res.status(200).json({users: res})
    })
    .catch(error => {
        console.log(error.data)
    })
})

module.exports = router