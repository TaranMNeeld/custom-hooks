const db = require('../data/db-config.js')

module.exports = {
    getUsers
}

const getUsers = () => {
    return db('users')
}