const sequelize = require('sequelize')
const mysql = require('mysql2')

const connection = new sequelize.Sequelize('revou_jayapura', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection